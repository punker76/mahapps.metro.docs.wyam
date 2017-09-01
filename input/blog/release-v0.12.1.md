Title: Release 0.12.1
Published: 2/1/2014
Category: Release
Author: punker76
---

# Fixes

- Fixed various bugs with the themed Flyouts (#947 #949): 
  - A dark `Flyout` doesn't have dark window commands anymore
  - Only the topmost `Flyout` changes the WindowCommands, if it is closed, the WindowCommands adapt to the underlying Flyout
  - Theme changes are respected properly
- Flyouts respect the template margin #867 #974
- Fixed an `OverflowException` in the `CleanWindowStyle` #897 #903
- Fixed various bugs for the `NumericUpDown` control: #952 #953
  - Fix for NumericUpDown exception raised when trying to enter a number in scientific notation
  - Fixed a problem with too early speedup
- Improved the performance for theme changes, they should now work instantly.
- Fixed an issue with the `WindowCommands` of a `CleanWindow`, they were white and therefore invisible when a `BorderlessWindowBehavior` was attached.
