import {
  Modal
} from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const PopupModal = ({
  content
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (content?.message) setOpen(true)
  }, [content]);

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal className={content.status} title={content.title} open={open} onCancel={handleCancel} footer={<></>}>
        {content.message}
      </Modal>
    </>
  );
};

export default PopupModal;