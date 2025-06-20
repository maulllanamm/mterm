import ListFilesContent from "../components/contents/ListFilesContent";

export const ls = async (): Promise<React.ReactNode> => {
  return <ListFilesContent />;
};
