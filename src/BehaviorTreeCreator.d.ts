import BehaviorTree5 from "./BehaviorTree5";

/** Static methods found on the exported BehaviorTree5Creator object*/
interface BehaviorTreeCreatorConstructor {
	readonly ClassName: "BehaviorTree5Creator";

	/** Create a behavior tree from a folder from the behavior tree plugin and an object. */
	Create<T = unknown>(treeFolder: Folder): BehaviorTree5<T> | undefined;

	/** Create a shared blackboard with an index and blackboard object. */
	RegisterSharedBlackboard(index: string, tab: object): void;

	/** Used to set an identifier for a tree. */
	SetTreeID(treeId: string, treeFolder: Folder): void;
}

export const BehaviorTreeCreator: BehaviorTreeCreatorConstructor;
