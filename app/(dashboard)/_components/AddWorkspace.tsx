import React, { useState } from "react";
import { useAuth } from "../_hooks/useAuth";
import { createNewWorkspace } from "@/app/server-actions/workspace/createNewWorkspace";
import { Workspace } from "@/app/server-actions/types";

const AddWorkspace: React.FC = () => {
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceDescription, setWorkspaceDescription] = useState("");
  const [isPrivate] = useState(false);
  const [icon] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const handleAddWorkspace = async () => {
    if (!workspaceName) {
      alert("Workspace name is required");
      return;
    }

    if (!user) {
      alert("You must be logged in to create a workspace");
      return;
    }

    const newWorkspace: Workspace = {
      id: crypto.randomUUID(),
      name: workspaceName,
      createdAt: new Date().toISOString(),
      userId: user.uid,
      desc: workspaceDescription,
      icon,
      isPrivate,
    };

    setLoading(true);
    try {
      await createNewWorkspace(newWorkspace, user.uid);

      alert("Workspace and project created successfully!");
      setWorkspaceName("");
      setWorkspaceDescription("");
    } catch (error) {
      console.error("Error adding workspace and project:", error);
      alert("Failed to create workspace and project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Add Workspace</h2>
      <label>Name</label>
      <input
        type="text"
        placeholder="Workspace Name"
        value={workspaceName}
        onChange={(e) => setWorkspaceName(e.target.value)}
        disabled={loading}
      />
      <label>Description</label>
      <input
        type="text"
        placeholder="Workspace Description"
        value={workspaceDescription}
        onChange={(e) => setWorkspaceDescription(e.target.value)}
        disabled={loading}
      />
      <button onClick={handleAddWorkspace} disabled={loading}>
        {loading ? "Adding Workspace..." : "Add Workspace"}
      </button>
    </div>
  );
};

export default AddWorkspace;
