export default function getDisplayName(
  WrappedComponent: React.ComponentType<any>
) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
