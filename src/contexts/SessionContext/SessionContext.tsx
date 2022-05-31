import React, { useEffect, useState } from "react";
import { ISessionContext } from "./types";

const SessionContext = React.createContext({} as ISessionContext);

const SessionProvider = ({ children }: { children?: React.ReactNode }) => {
  const [files, setFiles] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [dirFile, setDirFile] = useState<string>("");

  // useEffect (  async () => {
  //       setLoading(true);
  //       const resp = await window.api.listFiles(dirFile);
  //       setFiles(resp);
  //       setLoading(false);
  //   },[dirFile]
  // );

  return (
    <SessionContext.Provider
      value={{
        files,
        setFiles,
        loading,
        setLoading,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionProvider };
