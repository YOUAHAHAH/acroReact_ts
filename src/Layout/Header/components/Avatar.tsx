import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown, Menu, Avatar } from "@arco-design/web-react";
import { IconExport, IconUser, IconLock } from "@arco-design/web-react/icon";
import LockModal from "./Lock/LockModal";
import { listAvatar } from "@/Layout/type";

const list: listAvatar[] = [
  {
    key: "1",
    label: "个人中心",
    icon: <IconUser style={{ marginRight: "5px" }} />,
  },
  {
    key: "2",
    label: "锁定屏幕",
    icon: <IconLock style={{ marginRight: "5px" }} />,
  },
  {
    key: "3",
    label: "退出登录",
    icon: <IconExport style={{ marginRight: "5px" }} />,
  },
];

const HeaderAvatar = () => {
  const navigate = useNavigate();
  const lockRef = useRef<React.MutableRefObject<null> | undefined>();

  const useLockModal = () => {
    lockRef.current?.getModalVisible();
  };

  const onClick = (key: string) => {
    if (key === "1") {
      console.log(111);
    } else if (key === "2") {
      useLockModal();
    } else if (key === "3") {
      navigate("/login");
    }
  };

  return (
    <>
      <Dropdown
        droplist={
          <Menu>
            {list.map((item: listAvatar) => {
              return (
                <Menu.Item
                  key={item.key}
                  onClick={() => {
                    onClick(item.key);
                  }}
                >
                  {item.icon}
                  {item.label}
                </Menu.Item>
              );
            })}
          </Menu>
        }
        trigger='click'
        position='br'
      >
        <Avatar size={32}>Arco</Avatar>
      </Dropdown>
      <LockModal ref={lockRef} />
    </>
  );
};

export default HeaderAvatar;
