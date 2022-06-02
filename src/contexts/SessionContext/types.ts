export interface ISessionContext {
  files: string[];
  setFiles: React.Dispatch<React.SetStateAction<string[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  dirFile: string;
  setDirFile: React.Dispatch<React.SetStateAction<string>>;
}
