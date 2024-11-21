import React from 'react';
import useLoginWithGoogle from '../_hooks/useLoginWithGoogle';

const LogInWithGoogle = () => {
  const { handleLoginWithGoogle } = useLoginWithGoogle();
  return (
    <div>
      <button onClick={handleLoginWithGoogle}>Zaloguj się z google</button>
    </div>
  );
};

export default LogInWithGoogle;
