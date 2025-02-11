async function getRoomsByUser(userId) {
  // fetch the room data by user
  try {
    const data = await fetch(`/api/user-rooms?userId=${userId}`);
    const jsonData = await data.json();
    return jsonData;
  } catch (e) {
    console.error(e);
  }
}

async function getUsersByRoom(roomId) {
  // fetch the user data by room
  try {
    const data = await fetch(`/api/rooms?roomId=${roomId}`);
    const jsonData = await data.json();

    return jsonData;
  } catch (e) {
    console.error(e);
  }
}

export default async function getRecentMeetingData(user, setMeetings) {
  try {
    const roomsByUser = await getRoomsByUser(user.id);
    const temp = await Promise.all(
      roomsByUser.map(async (room) => {
        const usersByRoom = await getUsersByRoom(room.roomId);
        const filteredUsers = usersByRoom.filter((u) => u.email !== user.email);
        return { ...room, users: filteredUsers };
      })
    );

    setMeetings(temp);
  } catch (e) {
    console.error("Error fetching recent meeting data:", e);
  }
}