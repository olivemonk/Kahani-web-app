"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Textarea, Modal, Select, SelectItem, Button } from "@nextui-org/react";
import {Spinner} from "@nextui-org/react";
import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import Nav from "./Navbar";

const Generate = () => {
  const [image, setImage] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([
    "Horror",
    "Comedy",
    "Romance",
    "Thriller",
    "Action",
    "Drama",
    "Sci-Fi",
    "Fantasy",
    "Mystery",
    "Crime",
    "Adventure",
    "Animation",
    "Biography",
    "Documentary",
    "Family",
    "History",
    "Music",
    "Musical",
    "Sport",
    "War",
    "Western",
  ]);
  const [showModal, setShowModal] = useState(false);
  const [values, setValues] = React.useState(new Set([]));
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const handleImageUpload = (e) => {
    setIsLoading(true); // Set loading state to true when starting the upload
    const file = e.target.files[0];

    // Simulate an image upload delay (you can replace this with your actual upload logic)
    setTimeout(() => {
      setImage(file);
      setIsLoading(false); // Set loading state to false when upload is complete
    }, 2000); // Simulating a 2-second upload delay
  };

  const handleTagChange = (e) => {
    // Handle tag input logic here
    // Update the 'tags' state with selected or entered tags
    setTags([...tags, e.target.value]);
  };

  const handleSubmit = () => {
    // Handle story generation logic here

    // Show the "Work in Progress" modal
    setShowModal(true);
  };

  return (
    <div className="bg-dark-blue-gradient h-screen flex flex-col justify-center items-center">
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Nav />
        <h1 className="text-4xl font-extrabold text-white mb-4">
          Create Your Story
        </h1>

        <div className="mb-4 relative">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          id="image-upload"
        />
        <label
          htmlFor="image-upload"
          className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
        >
          Upload Image
        </label>
        <br />
        {isLoading ? (
    <Spinner className="mt-2 align-middle" /> // Display the loading spinner while uploading
  ) : image && (
    <div className="mt-2">
      <img
        src={URL.createObjectURL(image)}
        alt="Uploaded"
        className="max-w-full max-h-32"
      />
    </div>
  ) }
      </div>

        <div className="mt-2">
          <Select
            isRequired
            label="Add the tags"
            placeholder="What kind of story would you like"
            selectedKeys={Array.from(values)}
            onChange={handleTagChange}
            className="max-w-xs"
            color="primary"
            selectionMode="multiple"
            onSelectionChange={setValues}
          >
            {tags.map((tag, index) => (
              <SelectItem
                key={tag}
                className=" text-black p-1 rounded-full mr-2"
              >
                {tag}
              </SelectItem>
            ))}
          </Select>
        </div>
        <p className="text-md text-white  mt-3 mb-2">
          {" "}
          {Array.from(values).map((tag, index) => (
            <span
              key={tag}
              className="bg-blue-500 text-white p-1 rounded-full mr-2 "
            >
              {tag}
            </span>
          ))}
        </p>

        <Textarea
          variant="faded"
          label="Description"
          labelPlacement="outside"
          placeholder="Add your story description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="col-span-12 md:col-span-6 mb-6 md:mb-0 text-black mt-0"
        />

        <Button onPress={onOpen} color="primary" className="mt-2">
          Generate Story
        </Button>

        <Modal
          backdrop="blur"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-black p-4">
                  Work in Progress
                </ModalHeader>
                <ModalBody className="text-center bg-slate-200 ">
                  <p className="text-default-500 mb-4">
                    We're in the process of integrating our backend services.
                  </p>
                  <p className="text-default-500 mb-4">
                    Thanks for your patience and support!
                  </p>
                </ModalBody>
                <ModalFooter className=" bg-slate-200">
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Okay, got it!
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </motion.div>
    </div>
  );
};

export default Generate;
