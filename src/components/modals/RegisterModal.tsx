import React, { useCallback } from "react";
import { signIn } from "next-auth/react";

import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import Modal from "../Modal";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const onToggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [registerModal, loginModal]);

  const onSubmit = useCallback(() => {
    signIn("google");
  }, []);

  const bodyContent = (
    <div className="flex flex-col gap-4 text-center">
      <p className="text-lg text-white font-semibold">
        Welcome to Havadis 👋
      </p>
      <p className="text-sm text-neutral-400">
        Sign up instantly using your Google account.
      </p>
    </div>
  );

  const footerContent = (
    <div className="mt-4 text-center text-neutral-400">
      <p>
        Already have an account?
        <span
          onClick={onToggle}
          className="cursor-pointer text-white hover:underline ml-1"
        >
          Sign In
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={false}
      isOpen={registerModal.isOpen}
      title="Create an Account"
      actionLabel="Continue with Google"
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
