export const sendInvitationEmail = async (
  email: string,
  userFullName: string,
  userEmail: string,
  workspaceName: string
) => {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({
        email,
        userFullName,
        userEmail,
        workspaceName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await response.json();
  } catch (error) {
    console.error("Error sending invitation email:", error);
  }
};
