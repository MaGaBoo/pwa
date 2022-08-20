import React from "react";
import { withServiceWorkerUpdater } from "@3m1/service-worker-updater";

import Form from "./components/Form/Form";
import "./App.css";

const App = (props) => {
  const { newServiceWorkerDetected, onLoadNewServiceWorkerAccept } = props;

  return (
    <div className="App">
      {newServiceWorkerDetected && (
        <div
          style={{ backgroundColor: "#2D93AD", marginBottom: 20, padding: 20 }}
        >
          <h3>New version available! Would you like to update your app?</h3>
          <button
            onClick={onLoadNewServiceWorkerAccept}
            style={{ padding: 15 }}
          >
            Update!
          </button>
        </div>
      )}

      <Form />
    </div>
  );
};

export default withServiceWorkerUpdater(App);
