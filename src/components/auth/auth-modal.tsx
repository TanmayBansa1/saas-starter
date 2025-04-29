"use client";

import { SignIn, SignUp } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AnimatePresence, motion } from "framer-motion";

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  defaultView: "sign-in" | "sign-up";
};

export function AuthModal({ isOpen, onClose, defaultView = "sign-in" }: AuthModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="inset-0 bg-black/50 z-50"
        >
          <Dialog open={isOpen} onOpenChange={onClose}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ 
                duration: 0.8,
                ease: [0.4, 1, 0.3, 1],
              }}
            >
              <DialogContent className="sm:max-w-[425px] flex flex-col items-center justify-center overflow-x-hidden no-scrollbar bg-amber-100">
                <DialogHeader>
                  <DialogTitle className="text-2xl pt-4 font-bold text-center">Welcome to Sketchy</DialogTitle>
                </DialogHeader>
                <motion.div
                  layout
                >
                  <AnimatePresence mode="wait">
                    {defaultView === "sign-in" ? (
                      <motion.div
                        key="sign-in"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ 
                          duration: 0.8,
                        }}
                      >
                        <SignIn
                          appearance={{
                            baseTheme: [neobrutalism],
                          }}
                          routing="virtual"
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="sign-up"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ 
                          duration: 0.8,
                          ease: [0.4, 1, 0.3, 1],
                        }}
                      >
                        <SignUp
                          appearance={{
                            baseTheme: neobrutalism,
                          }}
                          routing="virtual"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                <DialogDescription>Have a great day!</DialogDescription>
              </DialogContent>
            </motion.div>
          </Dialog>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 