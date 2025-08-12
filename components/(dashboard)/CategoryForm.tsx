import React from "react";
import { Form, Input, Button } from "@heroui/react";

const CategoryForm = () => {
  return (
    <Form
      className="w-full max-w-xs flex flex-col gap-3"
      //   validationErrors={errors}
      //   onSubmit={onSubmit}
    >
      <Input
        label="Username"
        labelPlacement="outside"
        name="username"
        placeholder="Enter your username"
      />
      <Button type="submit" variant="flat">
        Submit
      </Button>
    </Form>
  );
};

export default CategoryForm;
