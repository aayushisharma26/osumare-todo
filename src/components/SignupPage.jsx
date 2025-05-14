import React, { useState } from "react";
import SignupModal from "./SignupModal";
import { Organize } from "./Organize";

export default function SignupPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleSignupSubmit = (data) => {
    setUserData(data);
    setModalOpen(false); 
  };

  return (
    <div>
      <SignupModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSignupSubmit}
      />
      <Organize
        onOpenModal={() => setModalOpen(true)}
        userData={userData}
      />
    </div>
  );
}
