import React, { useEffect, useState } from "react";
import { ISessionContext } from "./types";

const SessionContext = React.createContext({} as ISessionContext);

const SessionProvider = ({ children }: { children?: React.ReactNode }) => {
  const [files, setFiles] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [dirFile, setDirFile] = useState<string>("");

  return (
    <SessionContext.Provider
      value={{
        files,
        setFiles,
        loading,
        setLoading,
        dirFile,
        setDirFile,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionProvider };
