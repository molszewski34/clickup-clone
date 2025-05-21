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

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error sending invitation email:", error);
  }
};
