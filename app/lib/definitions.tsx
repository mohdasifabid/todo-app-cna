export interface Todo {
    title: String;
    _id: String;
    content: String;
    label: String;
  }
  export interface Props {
    data: Todo;
    setIsModalOpen: any;
    setEditingTodoObj: any;
  }
  export interface Payload {
    title: String;
    content: String;
    label: String;
  }
  