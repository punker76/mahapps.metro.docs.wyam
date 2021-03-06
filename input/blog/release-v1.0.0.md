Title: Release 1.0.0
Published: 12/2/2014
Category: Release
Author: punker76
---

# Notes

This is the first stable release of MahApps.Metro.

We removed everything marked as obsolete and made some API changes, but from now on MahApps.Metro follows Semantic Versioning, at least API wise. Please note that minor visual changes can still occur if there's a need for them.

A migration guide for the breaking changes is available here: https://github.com/MahApps/MahApps.Metro/blob/master/docs/v1.0-Migration-Guide.md

# Features

- Added a StatusBar and StatusBarItem style #1558
- Added the `TitleVisibility` and `CloseButtonVisibility` properties to the flyouts to control the visibility of the header.
- Added the `ButtonHelper.PreserveTextCase` attached property to control the automatic upper and lower casing of certain buttons. #1622
- If an .ico file contains multiple icon sizes, `MetroWindow` now automatically selects the optimal icon size. #1242 #1628
- `ShowMetroDialogAsync` now accepts `MetroDialogSettings` as argument so custom dialogs derived from the `CustomDialog` class can have a fade-in and fade-out animation
- The `ToggleSwitch` control can now be dragged with the mouse to change the enabled state #1652 #1595
- The `CleanWindow`'s close button now has a red background when hovering with the mouse.

# Changes

- The `IsOpenChangedEvent` of the `Flyout` control is now a routed event
- The animation of the `Flyout` control matches the Windows 8 flyout behavior more closely #1460
- Changed the event names of the 'NumericUpDown' control control #1518
- Split up the `ControlsHelper` class into multiple more granular helper classes #1520 #1582
- `SimpleDialog` has been renamed to `CustomDialog` #1613
- `BaseMetroDialog` now inherits from `ContentControl` instead of `Control`. 
  The `DialogBody` property has effectively been replaced by the `Content` property. #1615
- All elements in the titlebar now use the `IdealForegroundBrush` for a better contrast to the accent color. #1611
- The text in dialog buttons isn't lowercase by default anymore.
- Eliminated the need to pass the owning `BaseMetroTabControl` to `MetroTabItem` #1624
- `TextBoxHelper` is now written with an uppercase `B` to match `TextBox`.

# Bugfixes

- Fixed the `TabItem` close button requiring MahApps.Metro.Resources #1524
- Fixed the ClearType partially not working #1537
- Fixed flyouts closing when clicking on a formatting element #1487 #1508
- Fixed potential deadlocks when unloading the AppDomain #1584
- Fixed bad Combobox behaviour (Popup dropdown height) with new items #1521
- Fixed not showing window commands and buttons if a flyout is open by default #1627
- Fixed closing a tab doesn't work under specific circumstances #1639
- Fixed the `ToggleSwitch` control not respecting the height and width properties. #1652 #1466
- Fixed `MetroProgressBar` System.Windows.Media.Animation Warning 6 #1664
- Fixed opening animation of dynamically created flyouts #1665 #1655
- Fixed `WindowSettings` SaveWindowPosition saves to position 0,0 if window not shown #1671 #1672
- Fixed memory leak and exception with dynamically created Flyouts (mostly happens with Caliburn) #1681
- Fixed the focus border not showing up for message dialog buttons #1679 #1684
- Fixed the automatic focus for dialogs #1679 #1684
- Fixed blurry contextmenu/menu and menu items #1674 #1685
