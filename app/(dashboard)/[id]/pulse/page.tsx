"use client";
const UserPulsePage = () => {
  // useEffect(() => {
  //   const fetchParams = async () => {
  //     const resolvedParams = await params;
  //     const userId = resolvedParams.id;

  //     const unsubscribe = onAuthStateChanged(auth, (user) => {
  //       if (!user || user.uid !== userId) {
  //         router.push("/login");
  //       }
  //     });

  //     setUserId(userId);

  //     return () => unsubscribe();
  //   };

  //   fetchParams();
  // }, [params, router]); KAROL: Deprecated; TODO: implement checking if user is logged in as a wrapper

  return (
    <div
      className="flex justify-center items-center w-full font-sans text-4xl"
      style={{ height: "calc(100vh - 40px)" }}>
      Page Pulse in progress
    </div>
  );
};

export default UserPulsePage;
