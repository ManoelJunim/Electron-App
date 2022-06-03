import React, { useEffect, useState } from "react";
import { ISessionContext } from "./types";

const SessionContext = React.createContext({} as ISessionContext);

const SessionProvider = ({ children }: { children?: React.ReactNode }) => {
  const [files, setFiles] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [nameFolder, setNameFolder] = useState<string>("");
  const [currentDir, setCurrentDir] = useState<string>(
    "C:\\Users\\Manoel Farias\\Desktop"
  );

  useEffect(() => {
    setLoading(true);
    const getListFiles = async () => {
      const resp = await window.api.listFiles(currentDir);
      setFiles(resp);
      setLoading(false);
    };

    getListFiles().catch(console.error);
  }, [currentDir]);

  useEffect(() => {
    setLoading(true);
    const getListFolder = async () => {
      setCurrentDir(`${currentDir}\\${nameFolder}`);
      const resp = await window.api.listFiles(`${currentDir}\\${nameFolder}`);

      setFiles(resp);
      setLoading(false);
    };

    getListFolder().catch(console.error);
  }, [nameFolder]);

  return (
    <SessionContext.Provider
      value={{
        files,
        setFiles,
        loading,
        setLoading,
        currentDir,
        setCurrentDir,
        setNameFolder,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionProvider };
