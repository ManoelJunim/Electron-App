export interface ISessionContext {
  files: string[];
  setFiles: React.Dispatch<React.SetStateAction<string[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  currentDir: string;
  setCurrentDir: React.Dispatch<React.SetStateAction<string>>;
  setNameFolder: React.Dispatch<React.SetStateAction<string>>;
}
