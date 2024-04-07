export interface IFile {
  name: string;
}

const File = ({ name }: IFile) => {
  return <span>{name}</span>;
};

export default File;
