import { useCallback, useState } from "react";
import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
}

// 選択したユーザー情報を特定しモーダルを表示するカスタムフック
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser!);
    onOpen()
  }, [])

  return{ onSelectUser, selectedUser}
}


// 配列メソッドのfindは要素がない場合は'undefined'を返すので'targetUser'でエラーになる。
// ’targetUser!'とすることでfind による要素が存在する事を明治的にする。
