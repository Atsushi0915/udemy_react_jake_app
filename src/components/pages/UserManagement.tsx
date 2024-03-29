/* eslint-disable react-hooks/exhaustive-deps */
import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose} = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser(); 
  

  useEffect(() => getUsers(), [])

  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id, users, onOpen })
    onOpen()
  },[users, onSelectUser, onOpen])

  return (
    <>
      {loading ? (
      <Center h="100vh">
        <Spinner />
      </Center>
      ):(
      <Wrap p={{ base: 4, md: 10}} justify='center' >
        {users.map((user) => (
          <WrapItem key={user.id} mx="auto">
            <UserCard 
            id={user.id}
            imageUrl={"https://source.unsplash.com/random"}
            userName={user.username}
            fullName={user.name}  
            onClick={onClickUser}
          />
          </WrapItem>
        ))} 
      </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
    
  )
})