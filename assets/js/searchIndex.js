
var camelCaseTokenizer = function (obj) {
    var previous = '';
    return obj.toString().trim().split(/[\s\-]+|(?=[A-Z])/).reduce(function(acc, cur) {
        var current = cur.toLowerCase();
        if(acc.length === 0) {
            previous = current;
            return acc.concat(current);
        }
        previous = previous.concat(current);
        return acc.concat([current, previous]);
    }, []);
}
lunr.tokenizer.registerFunction(camelCaseTokenizer, 'camelCaseTokenizer')
var searchModule = function() {
    var idMap = [];
    function y(e) { 
        idMap.push(e); 
    }
    var idx = lunr(function() {
        this.field('title', { boost: 10 });
        this.field('content');
        this.field('description', { boost: 5 });
        this.field('tags', { boost: 50 });
        this.ref('id');
        this.tokenizer(camelCaseTokenizer);

        this.pipeline.remove(lunr.stopWordFilter);
        this.pipeline.remove(lunr.stemmer);
    });
    function a(e) { 
        idx.add(e); 
    }

    a({
        id:0,
        title:"MetroThumbContentControlDragStartedEventArgs",
        content:"MetroThumbContentControlDragStartedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:1,
        title:"RectangleHeightToRadiusConverter",
        content:"RectangleHeightToRadiusConverter",
        description:'',
        tags:''
    });

    a({
        id:2,
        title:"TreeHelper",
        content:"TreeHelper",
        description:'',
        tags:''
    });

    a({
        id:3,
        title:"SplitViewPanePlacement",
        content:"SplitViewPanePlacement",
        description:'',
        tags:''
    });

    a({
        id:4,
        title:"ProgressDialogController",
        content:"ProgressDialogController",
        description:'',
        tags:''
    });

    a({
        id:5,
        title:"BaseMetroTabControl",
        content:"BaseMetroTabControl",
        description:'',
        tags:''
    });

    a({
        id:6,
        title:"IDialogCoordinator",
        content:"IDialogCoordinator",
        description:'',
        tags:''
    });

    a({
        id:7,
        title:"ToLowerConverter",
        content:"ToLowerConverter",
        description:'',
        tags:''
    });

    a({
        id:8,
        title:"MetroWindow FlyoutStatusChangedRoutedEventArgs",
        content:"MetroWindow FlyoutStatusChangedRoutedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:9,
        title:"ClosingWindowEventHandlerArgs",
        content:"ClosingWindowEventHandlerArgs",
        description:'',
        tags:''
    });

    a({
        id:10,
        title:"DialogManager",
        content:"DialogManager",
        description:'',
        tags:''
    });

    a({
        id:11,
        title:"ContentControlEx",
        content:"ContentControlEx",
        description:'',
        tags:''
    });

    a({
        id:12,
        title:"Utils",
        content:"Utils",
        description:'',
        tags:''
    });

    a({
        id:13,
        title:"RECT",
        content:"RECT",
        description:'',
        tags:''
    });

    a({
        id:14,
        title:"ReloadBehavior",
        content:"ReloadBehavior",
        description:'',
        tags:''
    });

    a({
        id:15,
        title:"MessageDialogResult",
        content:"MessageDialogResult",
        description:'',
        tags:''
    });

    a({
        id:16,
        title:"ThicknessSideType",
        content:"ThicknessSideType",
        description:'',
        tags:''
    });

    a({
        id:17,
        title:"MetroThumb",
        content:"MetroThumb",
        description:'',
        tags:''
    });

    a({
        id:18,
        title:"MetroDialogColorScheme",
        content:"MetroDialogColorScheme",
        description:'',
        tags:''
    });

    a({
        id:19,
        title:"ToUpperConverter",
        content:"ToUpperConverter",
        description:'',
        tags:''
    });

    a({
        id:20,
        title:"DataGridRowHelper",
        content:"DataGridRowHelper",
        description:'',
        tags:''
    });

    a({
        id:21,
        title:"DialogParticipation",
        content:"DialogParticipation",
        description:'',
        tags:''
    });

    a({
        id:22,
        title:"WindowButtonCommands",
        content:"WindowButtonCommands",
        description:'',
        tags:''
    });

    a({
        id:23,
        title:"Flyout",
        content:"Flyout",
        description:'',
        tags:''
    });

    a({
        id:24,
        title:"GlowDirection",
        content:"GlowDirection",
        description:'',
        tags:''
    });

    a({
        id:25,
        title:"ResizeModeMinMaxButtonVisibilityConverter",
        content:"ResizeModeMinMaxButtonVisibilityConverter",
        description:'',
        tags:''
    });

    a({
        id:26,
        title:"Glow",
        content:"Glow",
        description:'',
        tags:''
    });

    a({
        id:27,
        title:"IWindowPlacementSettings",
        content:"IWindowPlacementSettings",
        description:'',
        tags:''
    });

    a({
        id:28,
        title:"StylizedBehaviors",
        content:"StylizedBehaviors",
        description:'',
        tags:''
    });

    a({
        id:29,
        title:"Underline",
        content:"Underline",
        description:'',
        tags:''
    });

    a({
        id:30,
        title:"TiltBehavior",
        content:"TiltBehavior",
        description:'',
        tags:''
    });

    a({
        id:31,
        title:"LoginDialog",
        content:"LoginDialog",
        description:'',
        tags:''
    });

    a({
        id:32,
        title:"MultiFrameImage",
        content:"MultiFrameImage",
        description:'',
        tags:''
    });

    a({
        id:33,
        title:"SetFlyoutOpenAction",
        content:"SetFlyoutOpenAction",
        description:'',
        tags:''
    });

    a({
        id:34,
        title:"FlipViewItem",
        content:"FlipViewItem",
        description:'',
        tags:''
    });

    a({
        id:35,
        title:"DatePickerTextBoxBehavior",
        content:"DatePickerTextBoxBehavior",
        description:'',
        tags:''
    });

    a({
        id:36,
        title:"FlyoutsControl",
        content:"FlyoutsControl",
        description:'',
        tags:''
    });

    a({
        id:37,
        title:"MultiFrameImageMode",
        content:"MultiFrameImageMode",
        description:'',
        tags:''
    });

    a({
        id:38,
        title:"TextBoxHelper",
        content:"TextBoxHelper",
        description:'',
        tags:''
    });

    a({
        id:39,
        title:"FontSizeOffsetConverter",
        content:"FontSizeOffsetConverter",
        description:'',
        tags:''
    });

    a({
        id:40,
        title:"IMetroThumb",
        content:"IMetroThumb",
        description:'',
        tags:''
    });

    a({
        id:41,
        title:"Theme",
        content:"Theme",
        description:'',
        tags:''
    });

    a({
        id:42,
        title:"MetroThumbContentControlDragCompletedEventArgs",
        content:"MetroThumbContentControlDragCompletedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:43,
        title:"NumericUpDown",
        content:"NumericUpDown",
        description:'',
        tags:''
    });

    a({
        id:44,
        title:"RangeSelectionChangedEventArgs",
        content:"RangeSelectionChangedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:45,
        title:"Extensions",
        content:"Extensions",
        description:'',
        tags:''
    });

    a({
        id:46,
        title:"HamburgerMenuItemCollection",
        content:"HamburgerMenuItemCollection",
        description:'',
        tags:''
    });

    a({
        id:47,
        title:"SplitViewTemplateSettings",
        content:"SplitViewTemplateSettings",
        description:'',
        tags:''
    });

    a({
        id:48,
        title:"POINT",
        content:"POINT",
        description:'',
        tags:''
    });

    a({
        id:49,
        title:"DataGridCellHelper",
        content:"DataGridCellHelper",
        description:'',
        tags:''
    });

    a({
        id:50,
        title:"ThicknessBindingConverter",
        content:"ThicknessBindingConverter",
        description:'',
        tags:''
    });

    a({
        id:51,
        title:"MessageDialogStyle",
        content:"MessageDialogStyle",
        description:'',
        tags:''
    });

    a({
        id:52,
        title:"WindowCommandsItem",
        content:"WindowCommandsItem",
        description:'',
        tags:''
    });

    a({
        id:53,
        title:"MarkupConverter",
        content:"MarkupConverter",
        description:'',
        tags:''
    });

    a({
        id:54,
        title:"MetroWindow",
        content:"MetroWindow",
        description:'',
        tags:''
    });

    a({
        id:55,
        title:"TreeViewItemExtensions",
        content:"TreeViewItemExtensions",
        description:'',
        tags:''
    });

    a({
        id:56,
        title:"WindowSettings",
        content:"WindowSettings",
        description:'',
        tags:''
    });

    a({
        id:57,
        title:"DataGridNumericUpDownColumn",
        content:"DataGridNumericUpDownColumn",
        description:'',
        tags:''
    });

    a({
        id:58,
        title:"ToggleSwitchButton",
        content:"ToggleSwitchButton",
        description:'',
        tags:''
    });

    a({
        id:59,
        title:"WinApiHelper",
        content:"WinApiHelper",
        description:'',
        tags:''
    });

    a({
        id:60,
        title:"ToggleButtonHelper",
        content:"ToggleButtonHelper",
        description:'',
        tags:''
    });

    a({
        id:61,
        title:"PivotItem",
        content:"PivotItem",
        description:'',
        tags:''
    });

    a({
        id:62,
        title:"TransitioningContentControl",
        content:"TransitioningContentControl",
        description:'',
        tags:''
    });

    a({
        id:63,
        title:"ButtonsAlignment",
        content:"ButtonsAlignment",
        description:'',
        tags:''
    });

    a({
        id:64,
        title:"HotKeyBox",
        content:"HotKeyBox",
        description:'',
        tags:''
    });

    a({
        id:65,
        title:"ClockDegreeConverter",
        content:"ClockDegreeConverter",
        description:'',
        tags:''
    });

    a({
        id:66,
        title:"Tile",
        content:"Tile",
        description:'',
        tags:''
    });

    a({
        id:67,
        title:"NullToUnsetValueConverter",
        content:"NullToUnsetValueConverter",
        description:'',
        tags:''
    });

    a({
        id:68,
        title:"BackgroundToForegroundConverter",
        content:"BackgroundToForegroundConverter",
        description:'',
        tags:''
    });

    a({
        id:69,
        title:"LayoutInvalidationCatcher",
        content:"LayoutInvalidationCatcher",
        description:'',
        tags:''
    });

    a({
        id:70,
        title:"FlipView",
        content:"FlipView",
        description:'',
        tags:''
    });

    a({
        id:71,
        title:"PasswordBoxHelper",
        content:"PasswordBoxHelper",
        description:'',
        tags:''
    });

    a({
        id:72,
        title:"LoginDialogSettings",
        content:"LoginDialogSettings",
        description:'',
        tags:''
    });

    a({
        id:73,
        title:"MetroAnimatedTabControl",
        content:"MetroAnimatedTabControl",
        description:'',
        tags:''
    });

    a({
        id:74,
        title:"MetroTabItem",
        content:"MetroTabItem",
        description:'',
        tags:''
    });

    a({
        id:75,
        title:"StylizedBehaviorCollection",
        content:"StylizedBehaviorCollection",
        description:'',
        tags:''
    });

    a({
        id:76,
        title:"DropDownButton",
        content:"DropDownButton",
        description:'',
        tags:''
    });

    a({
        id:77,
        title:"ThicknessToDoubleConverter",
        content:"ThicknessToDoubleConverter",
        description:'',
        tags:''
    });

    a({
        id:78,
        title:"SplitViewPaneClosingEventArgs",
        content:"SplitViewPaneClosingEventArgs",
        description:'',
        tags:''
    });

    a({
        id:79,
        title:"VisibilityHelper",
        content:"VisibilityHelper",
        description:'',
        tags:''
    });

    a({
        id:80,
        title:"TabControlHelper",
        content:"TabControlHelper",
        description:'',
        tags:''
    });

    a({
        id:81,
        title:"Badged",
        content:"Badged",
        description:'',
        tags:''
    });

    a({
        id:82,
        title:"TabControlSelectFirstVisibleTabBehavior",
        content:"TabControlSelectFirstVisibleTabBehavior",
        description:'',
        tags:''
    });

    a({
        id:83,
        title:"NumericUpDownChangedRoutedEventArgs",
        content:"NumericUpDownChangedRoutedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:84,
        title:"RangeParameterChangedEventHandler",
        content:"RangeParameterChangedEventHandler",
        description:'',
        tags:''
    });

    a({
        id:85,
        title:"WindowCommands",
        content:"WindowCommands",
        description:'',
        tags:''
    });

    a({
        id:86,
        title:"WindowButtonCommands ClosingWindowEventHandler",
        content:"WindowButtonCommands ClosingWindowEventHandler",
        description:'',
        tags:''
    });

    a({
        id:87,
        title:"SplitViewDisplayMode",
        content:"SplitViewDisplayMode",
        description:'',
        tags:''
    });

    a({
        id:88,
        title:"HamburgerMenuGlyphItem",
        content:"HamburgerMenuGlyphItem",
        description:'',
        tags:''
    });

    a({
        id:89,
        title:"MouseWheelChange",
        content:"MouseWheelChange",
        description:'',
        tags:''
    });

    a({
        id:90,
        title:"ThemeManager",
        content:"ThemeManager",
        description:'',
        tags:''
    });

    a({
        id:91,
        title:"MouseWheelState",
        content:"MouseWheelState",
        description:'',
        tags:''
    });

    a({
        id:92,
        title:"ClipBorder",
        content:"ClipBorder",
        description:'',
        tags:''
    });

    a({
        id:93,
        title:"CloseTabItemAction",
        content:"CloseTabItemAction",
        description:'',
        tags:''
    });

    a({
        id:94,
        title:"ProgressRing",
        content:"ProgressRing",
        description:'',
        tags:''
    });

    a({
        id:95,
        title:"SplitView",
        content:"SplitView",
        description:'',
        tags:''
    });

    a({
        id:96,
        title:"CustomDialog",
        content:"CustomDialog",
        description:'',
        tags:''
    });

    a({
        id:97,
        title:"DateTimePicker",
        content:"DateTimePicker",
        description:'',
        tags:''
    });

    a({
        id:98,
        title:"SliderHelper",
        content:"SliderHelper",
        description:'',
        tags:''
    });

    a({
        id:99,
        title:"NumericUpDownChangedRoutedEventHandler",
        content:"NumericUpDownChangedRoutedEventHandler",
        description:'',
        tags:''
    });

    a({
        id:100,
        title:"DialogCoordinator",
        content:"DialogCoordinator",
        description:'',
        tags:''
    });

    a({
        id:101,
        title:"GroupBoxHelper",
        content:"GroupBoxHelper",
        description:'',
        tags:''
    });

    a({
        id:102,
        title:"Planerator",
        content:"Planerator",
        description:'',
        tags:''
    });

    a({
        id:103,
        title:"MetroContentControl",
        content:"MetroContentControl",
        description:'',
        tags:''
    });

    a({
        id:104,
        title:"OffOnConverter",
        content:"OffOnConverter",
        description:'',
        tags:''
    });

    a({
        id:105,
        title:"ScrollViewerOffsetMediator",
        content:"ScrollViewerOffsetMediator",
        description:'',
        tags:''
    });

    a({
        id:106,
        title:"TimePickerBase",
        content:"TimePickerBase",
        description:'',
        tags:''
    });

    a({
        id:107,
        title:"BaseMetroTabControl TabItemClosingEventArgs",
        content:"BaseMetroTabControl TabItemClosingEventArgs",
        description:'',
        tags:''
    });

    a({
        id:108,
        title:"DialogStateChangedEventArgs",
        content:"DialogStateChangedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:109,
        title:"HamburgerMenuItem",
        content:"HamburgerMenuItem",
        description:'',
        tags:''
    });

    a({
        id:110,
        title:"IsNullConverter",
        content:"IsNullConverter",
        description:'',
        tags:''
    });

    a({
        id:111,
        title:"MetroTabControl",
        content:"MetroTabControl",
        description:'',
        tags:''
    });

    a({
        id:112,
        title:"ItemClickEventHandler",
        content:"ItemClickEventHandler",
        description:'',
        tags:''
    });

    a({
        id:113,
        title:"Accent",
        content:"Accent",
        description:'',
        tags:''
    });

    a({
        id:114,
        title:"TimePickerFormat",
        content:"TimePickerFormat",
        description:'',
        tags:''
    });

    a({
        id:115,
        title:"MetroNavigationWindow",
        content:"MetroNavigationWindow",
        description:'',
        tags:''
    });

    a({
        id:116,
        title:"MahAppsException",
        content:"MahAppsException",
        description:'',
        tags:''
    });

    a({
        id:117,
        title:"ComboBoxHelper",
        content:"ComboBoxHelper",
        description:'',
        tags:''
    });

    a({
        id:118,
        title:"TimePicker",
        content:"TimePicker",
        description:'',
        tags:''
    });

    a({
        id:119,
        title:"MetroTabItemCloseButtonWidthConverter",
        content:"MetroTabItemCloseButtonWidthConverter",
        description:'',
        tags:''
    });

    a({
        id:120,
        title:"UnderlinedType",
        content:"UnderlinedType",
        description:'',
        tags:''
    });

    a({
        id:121,
        title:"ControlsHelper",
        content:"ControlsHelper",
        description:'',
        tags:''
    });

    a({
        id:122,
        title:"RangeSlider",
        content:"RangeSlider",
        description:'',
        tags:''
    });

    a({
        id:123,
        title:"MetroAnimatedSingleRowTabControl",
        content:"MetroAnimatedSingleRowTabControl",
        description:'',
        tags:''
    });

    a({
        id:124,
        title:"WindowsSettingBehaviour",
        content:"WindowsSettingBehaviour",
        description:'',
        tags:''
    });

    a({
        id:125,
        title:"ButtonHelper",
        content:"ButtonHelper",
        description:'',
        tags:''
    });

    a({
        id:126,
        title:"MetroProgressBar",
        content:"MetroProgressBar",
        description:'',
        tags:''
    });

    a({
        id:127,
        title:"RangeParameterChangeType",
        content:"RangeParameterChangeType",
        description:'',
        tags:''
    });

    a({
        id:128,
        title:"RangeParameterChangedEventArgs",
        content:"RangeParameterChangedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:129,
        title:"TransitionType",
        content:"TransitionType",
        description:'',
        tags:''
    });

    a({
        id:130,
        title:"HamburgerMenuIconItem",
        content:"HamburgerMenuIconItem",
        description:'',
        tags:''
    });

    a({
        id:131,
        title:"Pivot",
        content:"Pivot",
        description:'',
        tags:''
    });

    a({
        id:132,
        title:"GridLengthAnimation",
        content:"GridLengthAnimation",
        description:'',
        tags:''
    });

    a({
        id:133,
        title:"TreeViewMarginConverter",
        content:"TreeViewMarginConverter",
        description:'',
        tags:''
    });

    a({
        id:134,
        title:"MessageDialog",
        content:"MessageDialog",
        description:'',
        tags:''
    });

    a({
        id:135,
        title:"Position",
        content:"Position",
        description:'',
        tags:''
    });

    a({
        id:136,
        title:"WindowCommandsOverlayBehavior",
        content:"WindowCommandsOverlayBehavior",
        description:'',
        tags:''
    });

    a({
        id:137,
        title:"PasswordBoxBindingBehavior",
        content:"PasswordBoxBindingBehavior",
        description:'',
        tags:''
    });

    a({
        id:138,
        title:"FlyoutTheme",
        content:"FlyoutTheme",
        description:'',
        tags:''
    });

    a({
        id:139,
        title:"MetroDialogSettings",
        content:"MetroDialogSettings",
        description:'',
        tags:''
    });

    a({
        id:140,
        title:"AppTheme",
        content:"AppTheme",
        description:'',
        tags:''
    });

    a({
        id:141,
        title:"LoginDialogData",
        content:"LoginDialogData",
        description:'',
        tags:''
    });

    a({
        id:142,
        title:"InputDialog",
        content:"InputDialog",
        description:'',
        tags:''
    });

    a({
        id:143,
        title:"GlowWindowBehavior",
        content:"GlowWindowBehavior",
        description:'',
        tags:''
    });

    a({
        id:144,
        title:"Spelling",
        content:"Spelling",
        description:'',
        tags:''
    });

    a({
        id:145,
        title:"SplitButton",
        content:"SplitButton",
        description:'',
        tags:''
    });

    a({
        id:146,
        title:"RevealImage",
        content:"RevealImage",
        description:'',
        tags:''
    });

    a({
        id:147,
        title:"WINDOWPLACEMENT",
        content:"WINDOWPLACEMENT",
        description:'',
        tags:''
    });

    a({
        id:148,
        title:"TimePickerBaseSelectionChangedEventArgs",
        content:"TimePickerBaseSelectionChangedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:149,
        title:"ItemClickEventArgs",
        content:"ItemClickEventArgs",
        description:'',
        tags:''
    });

    a({
        id:150,
        title:"ScrollBarHelper",
        content:"ScrollBarHelper",
        description:'',
        tags:''
    });

    a({
        id:151,
        title:"TimePartVisibility",
        content:"TimePartVisibility",
        description:'',
        tags:''
    });

    a({
        id:152,
        title:"HotKey",
        content:"HotKey",
        description:'',
        tags:''
    });

    a({
        id:153,
        title:"BorderlessWindowBehavior",
        content:"BorderlessWindowBehavior",
        description:'',
        tags:''
    });

    a({
        id:154,
        title:"CustomValidationPopup",
        content:"CustomValidationPopup",
        description:'',
        tags:''
    });

    a({
        id:155,
        title:"BaseMetroTabControl TabItemClosingEventHandler",
        content:"BaseMetroTabControl TabItemClosingEventHandler",
        description:'',
        tags:''
    });

    a({
        id:156,
        title:"HamburgerMenu",
        content:"HamburgerMenu",
        description:'',
        tags:''
    });

    a({
        id:157,
        title:"MetroThumbContentControlAutomationPeer",
        content:"MetroThumbContentControlAutomationPeer",
        description:'',
        tags:''
    });

    a({
        id:158,
        title:"DataGridHelper",
        content:"DataGridHelper",
        description:'',
        tags:''
    });

    a({
        id:159,
        title:"MetroThumbContentControl",
        content:"MetroThumbContentControl",
        description:'',
        tags:''
    });

    a({
        id:160,
        title:"RangeSelectionChangedEventHandler",
        content:"RangeSelectionChangedEventHandler",
        description:'',
        tags:''
    });

    a({
        id:161,
        title:"OnThemeChangedEventArgs",
        content:"OnThemeChangedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:162,
        title:"ToggleSwitch",
        content:"ToggleSwitch",
        description:'',
        tags:''
    });

    a({
        id:163,
        title:"ExpanderHelper",
        content:"ExpanderHelper",
        description:'',
        tags:''
    });

    a({
        id:164,
        title:"StringToVisibilityConverter",
        content:"StringToVisibilityConverter",
        description:'',
        tags:''
    });

    a({
        id:165,
        title:"ProgressDialog",
        content:"ProgressDialog",
        description:'',
        tags:''
    });

    a({
        id:166,
        title:"HamburgerMenuImageItem",
        content:"HamburgerMenuImageItem",
        description:'',
        tags:''
    });

    a({
        id:167,
        title:"BaseMetroDialog",
        content:"BaseMetroDialog",
        description:'',
        tags:''
    });

    a({
        id:168,
        title:"BindableResourceBehavior",
        content:"BindableResourceBehavior",
        description:'',
        tags:''
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/MetroThumbContentControlDragStartedEventArgs',
        title:"MetroThumbContentControlDragStartedEventArgs",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Converters/RectangleHeightToRadiusConverter',
        title:"RectangleHeightToRadiusConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/TreeHelper',
        title:"TreeHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/SplitViewPanePlacement',
        title:"SplitViewPanePlacement",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls.Dialogs/ProgressDialogController',
        title:"ProgressDialogController",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/BaseMetroTabControl',
        title:"BaseMetroTabControl",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls.Dialogs/IDialogCoordinator',
        title:"IDialogCoordinator",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Converters/ToLowerConverter',
        title:"ToLowerConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/FlyoutStatusChangedRoutedEventArgs',
        title:"MetroWindow.FlyoutStatusChangedRoutedEventArgs",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/ClosingWindowEventHandlerArgs',
        title:"ClosingWindowEventHandlerArgs",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls.Dialogs/DialogManager',
        title:"DialogManager",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/ContentControlEx',
        title:"ContentControlEx",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/Utils',
        title:"Utils",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Native/RECT',
        title:"RECT",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Behaviours/ReloadBehavior',
        title:"ReloadBehavior",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls.Dialogs/MessageDialogResult',
        title:"MessageDialogResult",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Converters/ThicknessSideType',
        title:"ThicknessSideType",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/MetroThumb',
        title:"MetroThumb",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls.Dialogs/MetroDialogColorScheme',
        title:"MetroDialogColorScheme",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Converters/ToUpperConverter',
        title:"ToUpperConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/DataGridRowHelper',
        title:"DataGridRowHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls.Dialogs/DialogParticipation',
        title:"DialogParticipation",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/WindowButtonCommands',
        title:"WindowButtonCommands",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/Flyout',
        title:"Flyout",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/GlowDirection',
        title:"GlowDirection",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Converters/ResizeModeMinMaxButtonVisibilityConverter',
        title:"ResizeModeMinMaxButtonVisibilityConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/Glow',
        title:"Glow",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/IWindowPlacementSettings',
        title:"IWindowPlacementSettings",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Behaviours/StylizedBehaviors',
        title:"StylizedBehaviors",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/Underline',
        title:"Underline",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Behaviours/TiltBehavior',
        title:"TiltBehavior",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls.Dialogs/LoginDialog',
        title:"LoginDialog",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/MultiFrameImage',
        title:"MultiFrameImage",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Actions/SetFlyoutOpenAction',
        title:"SetFlyoutOpenAction",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/FlipViewItem',
        title:"FlipViewItem",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Behaviours/DatePickerTextBoxBehavior',
        title:"DatePickerTextBoxBehavior",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/FlyoutsControl',
        title:"FlyoutsControl",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/MultiFrameImageMode',
        title:"MultiFrameImageMode",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/TextBoxHelper',
        title:"TextBoxHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Converters/FontSizeOffsetConverter',
        title:"FontSizeOffsetConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/IMetroThumb',
        title:"IMetroThumb",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/Theme',
        title:"Theme",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/MetroThumbContentControlDragCompletedEventArgs',
        title:"MetroThumbContentControlDragCompletedEventArgs",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/NumericUpDown',
        title:"NumericUpDown",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/RangeSelectionChangedEventArgs',
        title:"RangeSelectionChangedEventArgs",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/Extensions',
        title:"Extensions",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/HamburgerMenuItemCollection',
        title:"HamburgerMenuItemCollection",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/SplitViewTemplateSettings',
        title:"SplitViewTemplateSettings",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Native/POINT',
        title:"POINT",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/DataGridCellHelper',
        title:"DataGridCellHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Converters/ThicknessBindingConverter',
        title:"ThicknessBindingConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls.Dialogs/MessageDialogStyle',
        title:"MessageDialogStyle",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/WindowCommandsItem',
        title:"WindowCommandsItem",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Converters/MarkupConverter',
        title:"MarkupConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/MetroWindow',
        title:"MetroWindow",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Converters/TreeViewItemExtensions',
        title:"TreeViewItemExtensions",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/WindowSettings',
        title:"WindowSettings",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/DataGridNumericUpDownColumn',
        title:"DataGridNumericUpDownColumn",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/ToggleSwitchButton',
        title:"ToggleSwitchButton",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/WinApiHelper',
        title:"WinApiHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/ToggleButtonHelper',
        title:"ToggleButtonHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/PivotItem',
        title:"PivotItem",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/TransitioningContentControl',
        title:"TransitioningContentControl",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/ButtonsAlignment',
        title:"ButtonsAlignment",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/HotKeyBox',
        title:"HotKeyBox",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Converters/ClockDegreeConverter',
        title:"ClockDegreeConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/Tile',
        title:"Tile",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Converters/NullToUnsetValueConverter',
        title:"NullToUnsetValueConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Converters/BackgroundToForegroundConverter',
        title:"BackgroundToForegroundConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/LayoutInvalidationCatcher',
        title:"LayoutInvalidationCatcher",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/FlipView',
        title:"FlipView",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/PasswordBoxHelper',
        title:"PasswordBoxHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls.Dialogs/LoginDialogSettings',
        title:"LoginDialogSettings",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/MetroAnimatedTabControl',
        title:"MetroAnimatedTabControl",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/MetroTabItem',
        title:"MetroTabItem",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Behaviours/StylizedBehaviorCollection',
        title:"StylizedBehaviorCollection",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/DropDownButton',
        title:"DropDownButton",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Converters/ThicknessToDoubleConverter',
        title:"ThicknessToDoubleConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/SplitViewPaneClosingEventArgs',
        title:"SplitViewPaneClosingEventArgs",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/VisibilityHelper',
        title:"VisibilityHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/TabControlHelper',
        title:"TabControlHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/Badged',
        title:"Badged",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Behaviours/TabControlSelectFirstVisibleTabBehavior',
        title:"TabControlSelectFirstVisibleTabBehavior",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/NumericUpDownChangedRoutedEventArgs',
        title:"NumericUpDownChangedRoutedEventArgs",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/RangeParameterChangedEventHandler',
        title:"RangeParameterChangedEventHandler",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/WindowCommands',
        title:"WindowCommands",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/ClosingWindowEventHandler',
        title:"WindowButtonCommands.ClosingWindowEventHandler",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/SplitViewDisplayMode',
        title:"SplitViewDisplayMode",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/HamburgerMenuGlyphItem',
        title:"HamburgerMenuGlyphItem",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/MouseWheelChange',
        title:"MouseWheelChange",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro/ThemeManager',
        title:"ThemeManager",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/MouseWheelState',
        title:"MouseWheelState",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/ClipBorder',
        title:"ClipBorder",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Actions/CloseTabItemAction',
        title:"CloseTabItemAction",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/ProgressRing',
        title:"ProgressRing",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/SplitView',
        title:"SplitView",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls.Dialogs/CustomDialog',
        title:"CustomDialog",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/DateTimePicker',
        title:"DateTimePicker",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/SliderHelper',
        title:"SliderHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/NumericUpDownChangedRoutedEventHandler',
        title:"NumericUpDownChangedRoutedEventHandler",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls.Dialogs/DialogCoordinator',
        title:"DialogCoordinator",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/GroupBoxHelper',
        title:"GroupBoxHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/Planerator',
        title:"Planerator",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/MetroContentControl',
        title:"MetroContentControl",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Converters/OffOnConverter',
        title:"OffOnConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/ScrollViewerOffsetMediator',
        title:"ScrollViewerOffsetMediator",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/TimePickerBase',
        title:"TimePickerBase",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/TabItemClosingEventArgs',
        title:"BaseMetroTabControl.TabItemClosingEventArgs",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls.Dialogs/DialogStateChangedEventArgs',
        title:"DialogStateChangedEventArgs",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/HamburgerMenuItem',
        title:"HamburgerMenuItem",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Converters/IsNullConverter',
        title:"IsNullConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/MetroTabControl',
        title:"MetroTabControl",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/ItemClickEventHandler',
        title:"ItemClickEventHandler",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro/Accent',
        title:"Accent",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/TimePickerFormat',
        title:"TimePickerFormat",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/MetroNavigationWindow',
        title:"MetroNavigationWindow",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro/MahAppsException',
        title:"MahAppsException",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/ComboBoxHelper',
        title:"ComboBoxHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/TimePicker',
        title:"TimePicker",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Converters/MetroTabItemCloseButtonWidthConverter',
        title:"MetroTabItemCloseButtonWidthConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/UnderlinedType',
        title:"UnderlinedType",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/ControlsHelper',
        title:"ControlsHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/RangeSlider',
        title:"RangeSlider",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/MetroAnimatedSingleRowTabControl',
        title:"MetroAnimatedSingleRowTabControl",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Behaviours/WindowsSettingBehaviour',
        title:"WindowsSettingBehaviour",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/ButtonHelper',
        title:"ButtonHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/MetroProgressBar',
        title:"MetroProgressBar",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/RangeParameterChangeType',
        title:"RangeParameterChangeType",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/RangeParameterChangedEventArgs',
        title:"RangeParameterChangedEventArgs",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/TransitionType',
        title:"TransitionType",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/HamburgerMenuIconItem',
        title:"HamburgerMenuIconItem",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/Pivot',
        title:"Pivot",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/GridLengthAnimation',
        title:"GridLengthAnimation",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Converters/TreeViewMarginConverter',
        title:"TreeViewMarginConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls.Dialogs/MessageDialog',
        title:"MessageDialog",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/Position',
        title:"Position",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/WindowCommandsOverlayBehavior',
        title:"WindowCommandsOverlayBehavior",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Behaviours/PasswordBoxBindingBehavior',
        title:"PasswordBoxBindingBehavior",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/FlyoutTheme',
        title:"FlyoutTheme",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls.Dialogs/MetroDialogSettings',
        title:"MetroDialogSettings",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro/AppTheme',
        title:"AppTheme",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls.Dialogs/LoginDialogData',
        title:"LoginDialogData",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls.Dialogs/InputDialog',
        title:"InputDialog",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Behaviours/GlowWindowBehavior',
        title:"GlowWindowBehavior",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/Spelling',
        title:"Spelling",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/SplitButton',
        title:"SplitButton",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/RevealImage',
        title:"RevealImage",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Native/WINDOWPLACEMENT',
        title:"WINDOWPLACEMENT",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/TimePickerBaseSelectionChangedEventArgs_1',
        title:"TimePickerBaseSelectionChangedEventArgs<T>",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/ItemClickEventArgs',
        title:"ItemClickEventArgs",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/ScrollBarHelper',
        title:"ScrollBarHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/TimePartVisibility',
        title:"TimePartVisibility",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/HotKey',
        title:"HotKey",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Behaviours/BorderlessWindowBehavior',
        title:"BorderlessWindowBehavior",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/CustomValidationPopup',
        title:"CustomValidationPopup",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/TabItemClosingEventHandler',
        title:"BaseMetroTabControl.TabItemClosingEventHandler",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/HamburgerMenu',
        title:"HamburgerMenu",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/MetroThumbContentControlAutomationPeer',
        title:"MetroThumbContentControlAutomationPeer",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/DataGridHelper',
        title:"DataGridHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/MetroThumbContentControl',
        title:"MetroThumbContentControl",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/RangeSelectionChangedEventHandler',
        title:"RangeSelectionChangedEventHandler",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro/OnThemeChangedEventArgs',
        title:"OnThemeChangedEventArgs",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/ToggleSwitch',
        title:"ToggleSwitch",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/ExpanderHelper',
        title:"ExpanderHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Converters/StringToVisibilityConverter',
        title:"StringToVisibilityConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls.Dialogs/ProgressDialog',
        title:"ProgressDialog",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls/HamburgerMenuImageItem',
        title:"HamburgerMenuImageItem",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Controls.Dialogs/BaseMetroDialog',
        title:"BaseMetroDialog",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/MahApps.Metro.Behaviours/BindableResourceBehavior',
        title:"BindableResourceBehavior",
        description:""
    });

    return {
        search: function(q) {
            return idx.search(q).map(function(i) {
                return idMap[i.ref];
            });
        }
    };
}();
