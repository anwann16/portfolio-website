"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@heroui/react";

type PropsFormCategory = {
  isOpen: boolean;
  onOpenChange: () => void;
};

const CategoryForm = ({ isOpen, onOpenChange }: PropsFormCategory) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        placement="center"
        onOpenChange={onOpenChange}
        backdrop="blur"
        classNames={{
          backdrop: "bg-black/50 backdrop-blur-sm",
        }}
      >
        <ModalContent className="bg-white shadow-lg">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 ml-2 text-black uppercase">
                Add New Category
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Email"
                  labelPlacement="outside-top"
                  placeholder="Enter your email"
                  //   variant="flat"
                  className="text-black outline-none border-none"
                />
              </ModalBody>
              <ModalFooter>
                <Button className="bg-blue-600 rounded-lg" onPress={onClose}>
                  Add Category
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CategoryForm;
