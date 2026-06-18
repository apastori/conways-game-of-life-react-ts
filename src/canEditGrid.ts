export function canEditGrid(
  hasSimulationStarted: boolean,
  isPlaying: boolean,
  allowEditingWhilePaused: boolean,
  allowEditingWhileRunning: boolean
): boolean {
  // Before the first Start, editing is always allowed regardless of toggles.
  if (!hasSimulationStarted) {
    return true
  }
  if (isPlaying) {
    return allowEditingWhileRunning
  }
  return allowEditingWhilePaused
}
