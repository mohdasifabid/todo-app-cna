export interface Todo {
  title: String;
  _id: String;
  content: String;
  label: String;
}
export interface Props {
  data: Todo;
  setIsModalOpen: any;
}
