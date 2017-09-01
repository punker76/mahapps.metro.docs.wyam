
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
        title:"GroupBoxHelper",
        content:"GroupBoxHelper",
        description:'',
        tags:''
    });

    a({
        id:1,
        title:"NullToUnsetValueConverter",
        content:"NullToUnsetValueConverter",
        description:'',
        tags:''
    });

    a({
        id:2,
        title:"RangeParameterChangeType",
        content:"RangeParameterChangeType",
        description:'',
        tags:''
    });

    a({
        id:3,
        title:"MessageDialogStyle",
        content:"MessageDialogStyle",
        description:'',
        tags:''
    });

    a({
        id:4,
        title:"AppTheme",
        content:"AppTheme",
        description:'',
        tags:''
    });

    a({
        id:5,
        title:"DialogParticipation",
        content:"DialogParticipation",
        description:'',
        tags:''
    });

    a({
        id:6,
        title:"ThemeManager",
        content:"ThemeManager",
        description:'',
        tags:''
    });

    a({
        id:7,
        title:"FlipViewItem",
        content:"FlipViewItem",
        description:'',
        tags:''
    });

    a({
        id:8,
        title:"HamburgerMenuItemCollection",
        content:"HamburgerMenuItemCollection",
        description:'',
        tags:''
    });

    a({
        id:9,
        title:"MetroThumbContentControlDragStartedEventArgs",
        content:"MetroThumbContentControlDragStartedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:10,
        title:"TimePicker",
        content:"TimePicker",
        description:'',
        tags:''
    });

    a({
        id:11,
        title:"MetroWindow",
        content:"MetroWindow",
        description:'',
        tags:''
    });

    a({
        id:12,
        title:"FlipView",
        content:"FlipView",
        description:'',
        tags:''
    });

    a({
        id:13,
        title:"GridLengthAnimation",
        content:"GridLengthAnimation",
        description:'',
        tags:''
    });

    a({
        id:14,
        title:"ButtonsAlignment",
        content:"ButtonsAlignment",
        description:'',
        tags:''
    });

    a({
        id:15,
        title:"ProgressDialog",
        content:"ProgressDialog",
        description:'',
        tags:''
    });

    a({
        id:16,
        title:"OnThemeChangedEventArgs",
        content:"OnThemeChangedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:17,
        title:"VisibilityHelper",
        content:"VisibilityHelper",
        description:'',
        tags:''
    });

    a({
        id:18,
        title:"WindowCommandsOverlayBehavior",
        content:"WindowCommandsOverlayBehavior",
        description:'',
        tags:''
    });

    a({
        id:19,
        title:"Glow",
        content:"Glow",
        description:'',
        tags:''
    });

    a({
        id:20,
        title:"RangeSelectionChangedEventArgs",
        content:"RangeSelectionChangedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:21,
        title:"WindowsSettingBehaviour",
        content:"WindowsSettingBehaviour",
        description:'',
        tags:''
    });

    a({
        id:22,
        title:"HamburgerMenuGlyphItem",
        content:"HamburgerMenuGlyphItem",
        description:'',
        tags:''
    });

    a({
        id:23,
        title:"ClosingWindowEventHandlerArgs",
        content:"ClosingWindowEventHandlerArgs",
        description:'',
        tags:''
    });

    a({
        id:24,
        title:"StringToVisibilityConverter",
        content:"StringToVisibilityConverter",
        description:'',
        tags:''
    });

    a({
        id:25,
        title:"Accent",
        content:"Accent",
        description:'',
        tags:''
    });

    a({
        id:26,
        title:"HotKey",
        content:"HotKey",
        description:'',
        tags:''
    });

    a({
        id:27,
        title:"HotKeyBox",
        content:"HotKeyBox",
        description:'',
        tags:''
    });

    a({
        id:28,
        title:"NumericUpDownChangedRoutedEventArgs",
        content:"NumericUpDownChangedRoutedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:29,
        title:"Planerator",
        content:"Planerator",
        description:'',
        tags:''
    });

    a({
        id:30,
        title:"MetroTabItemCloseButtonWidthConverter",
        content:"MetroTabItemCloseButtonWidthConverter",
        description:'',
        tags:''
    });

    a({
        id:31,
        title:"IMetroThumb",
        content:"IMetroThumb",
        description:'',
        tags:''
    });

    a({
        id:32,
        title:"ToggleSwitch",
        content:"ToggleSwitch",
        description:'',
        tags:''
    });

    a({
        id:33,
        title:"IWindowPlacementSettings",
        content:"IWindowPlacementSettings",
        description:'',
        tags:''
    });

    a({
        id:34,
        title:"RangeParameterChangedEventHandler",
        content:"RangeParameterChangedEventHandler",
        description:'',
        tags:''
    });

    a({
        id:35,
        title:"MetroNavigationWindow",
        content:"MetroNavigationWindow",
        description:'',
        tags:''
    });

    a({
        id:36,
        title:"WindowCommandsItem",
        content:"WindowCommandsItem",
        description:'',
        tags:''
    });

    a({
        id:37,
        title:"MetroTabControl",
        content:"MetroTabControl",
        description:'',
        tags:''
    });

    a({
        id:38,
        title:"WindowButtonCommands",
        content:"WindowButtonCommands",
        description:'',
        tags:''
    });

    a({
        id:39,
        title:"LoginDialogData",
        content:"LoginDialogData",
        description:'',
        tags:''
    });

    a({
        id:40,
        title:"TimePickerBaseSelectionChangedEventArgs",
        content:"TimePickerBaseSelectionChangedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:41,
        title:"FlyoutTheme",
        content:"FlyoutTheme",
        description:'',
        tags:''
    });

    a({
        id:42,
        title:"TimePickerFormat",
        content:"TimePickerFormat",
        description:'',
        tags:''
    });

    a({
        id:43,
        title:"TabControlSelectFirstVisibleTabBehavior",
        content:"TabControlSelectFirstVisibleTabBehavior",
        description:'',
        tags:''
    });

    a({
        id:44,
        title:"Pivot",
        content:"Pivot",
        description:'',
        tags:''
    });

    a({
        id:45,
        title:"ContentControlEx",
        content:"ContentControlEx",
        description:'',
        tags:''
    });

    a({
        id:46,
        title:"BorderlessWindowBehavior",
        content:"BorderlessWindowBehavior",
        description:'',
        tags:''
    });

    a({
        id:47,
        title:"BaseMetroTabControl TabItemClosingEventArgs",
        content:"BaseMetroTabControl TabItemClosingEventArgs",
        description:'',
        tags:''
    });

    a({
        id:48,
        title:"Badged",
        content:"Badged",
        description:'',
        tags:''
    });

    a({
        id:49,
        title:"POINT",
        content:"POINT",
        description:'',
        tags:''
    });

    a({
        id:50,
        title:"PasswordBoxBindingBehavior",
        content:"PasswordBoxBindingBehavior",
        description:'',
        tags:''
    });

    a({
        id:51,
        title:"GlowDirection",
        content:"GlowDirection",
        description:'',
        tags:''
    });

    a({
        id:52,
        title:"TabControlHelper",
        content:"TabControlHelper",
        description:'',
        tags:''
    });

    a({
        id:53,
        title:"DataGridHelper",
        content:"DataGridHelper",
        description:'',
        tags:''
    });

    a({
        id:54,
        title:"DataGridNumericUpDownColumn",
        content:"DataGridNumericUpDownColumn",
        description:'',
        tags:''
    });

    a({
        id:55,
        title:"RangeParameterChangedEventArgs",
        content:"RangeParameterChangedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:56,
        title:"ToUpperConverter",
        content:"ToUpperConverter",
        description:'',
        tags:''
    });

    a({
        id:57,
        title:"ExpanderHelper",
        content:"ExpanderHelper",
        description:'',
        tags:''
    });

    a({
        id:58,
        title:"WindowCommands",
        content:"WindowCommands",
        description:'',
        tags:''
    });

    a({
        id:59,
        title:"MouseWheelChange",
        content:"MouseWheelChange",
        description:'',
        tags:''
    });

    a({
        id:60,
        title:"NumericUpDown",
        content:"NumericUpDown",
        description:'',
        tags:''
    });

    a({
        id:61,
        title:"MetroThumbContentControlDragCompletedEventArgs",
        content:"MetroThumbContentControlDragCompletedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:62,
        title:"RevealImage",
        content:"RevealImage",
        description:'',
        tags:''
    });

    a({
        id:63,
        title:"Position",
        content:"Position",
        description:'',
        tags:''
    });

    a({
        id:64,
        title:"ProgressDialogController",
        content:"ProgressDialogController",
        description:'',
        tags:''
    });

    a({
        id:65,
        title:"RECT",
        content:"RECT",
        description:'',
        tags:''
    });

    a({
        id:66,
        title:"WinApiHelper",
        content:"WinApiHelper",
        description:'',
        tags:''
    });

    a({
        id:67,
        title:"BindableResourceBehavior",
        content:"BindableResourceBehavior",
        description:'',
        tags:''
    });

    a({
        id:68,
        title:"BaseMetroTabControl",
        content:"BaseMetroTabControl",
        description:'',
        tags:''
    });

    a({
        id:69,
        title:"FlyoutsControl",
        content:"FlyoutsControl",
        description:'',
        tags:''
    });

    a({
        id:70,
        title:"ScrollBarHelper",
        content:"ScrollBarHelper",
        description:'',
        tags:''
    });

    a({
        id:71,
        title:"Flyout",
        content:"Flyout",
        description:'',
        tags:''
    });

    a({
        id:72,
        title:"SplitButton",
        content:"SplitButton",
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
        title:"DialogManager",
        content:"DialogManager",
        description:'',
        tags:''
    });

    a({
        id:75,
        title:"ControlsHelper",
        content:"ControlsHelper",
        description:'',
        tags:''
    });

    a({
        id:76,
        title:"BaseMetroTabControl TabItemClosingEventHandler",
        content:"BaseMetroTabControl TabItemClosingEventHandler",
        description:'',
        tags:''
    });

    a({
        id:77,
        title:"TreeViewItemExtensions",
        content:"TreeViewItemExtensions",
        description:'',
        tags:''
    });

    a({
        id:78,
        title:"TiltBehavior",
        content:"TiltBehavior",
        description:'',
        tags:''
    });

    a({
        id:79,
        title:"TreeViewMarginConverter",
        content:"TreeViewMarginConverter",
        description:'',
        tags:''
    });

    a({
        id:80,
        title:"ItemClickEventHandler",
        content:"ItemClickEventHandler",
        description:'',
        tags:''
    });

    a({
        id:81,
        title:"HamburgerMenu",
        content:"HamburgerMenu",
        description:'',
        tags:''
    });

    a({
        id:82,
        title:"SplitViewPaneClosingEventArgs",
        content:"SplitViewPaneClosingEventArgs",
        description:'',
        tags:''
    });

    a({
        id:83,
        title:"MetroDialogSettings",
        content:"MetroDialogSettings",
        description:'',
        tags:''
    });

    a({
        id:84,
        title:"Spelling",
        content:"Spelling",
        description:'',
        tags:''
    });

    a({
        id:85,
        title:"MetroWindow FlyoutStatusChangedRoutedEventArgs",
        content:"MetroWindow FlyoutStatusChangedRoutedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:86,
        title:"SplitViewDisplayMode",
        content:"SplitViewDisplayMode",
        description:'',
        tags:''
    });

    a({
        id:87,
        title:"ButtonHelper",
        content:"ButtonHelper",
        description:'',
        tags:''
    });

    a({
        id:88,
        title:"IDialogCoordinator",
        content:"IDialogCoordinator",
        description:'',
        tags:''
    });

    a({
        id:89,
        title:"CustomValidationPopup",
        content:"CustomValidationPopup",
        description:'',
        tags:''
    });

    a({
        id:90,
        title:"HamburgerMenuImageItem",
        content:"HamburgerMenuImageItem",
        description:'',
        tags:''
    });

    a({
        id:91,
        title:"MetroThumb",
        content:"MetroThumb",
        description:'',
        tags:''
    });

    a({
        id:92,
        title:"SplitViewPanePlacement",
        content:"SplitViewPanePlacement",
        description:'',
        tags:''
    });

    a({
        id:93,
        title:"HamburgerMenuIconItem",
        content:"HamburgerMenuIconItem",
        description:'',
        tags:''
    });

    a({
        id:94,
        title:"TreeHelper",
        content:"TreeHelper",
        description:'',
        tags:''
    });

    a({
        id:95,
        title:"IsNullConverter",
        content:"IsNullConverter",
        description:'',
        tags:''
    });

    a({
        id:96,
        title:"ThicknessToDoubleConverter",
        content:"ThicknessToDoubleConverter",
        description:'',
        tags:''
    });

    a({
        id:97,
        title:"MetroThumbContentControlAutomationPeer",
        content:"MetroThumbContentControlAutomationPeer",
        description:'',
        tags:''
    });

    a({
        id:98,
        title:"SplitViewTemplateSettings",
        content:"SplitViewTemplateSettings",
        description:'',
        tags:''
    });

    a({
        id:99,
        title:"SliderHelper",
        content:"SliderHelper",
        description:'',
        tags:''
    });

    a({
        id:100,
        title:"ProgressRing",
        content:"ProgressRing",
        description:'',
        tags:''
    });

    a({
        id:101,
        title:"GlowWindowBehavior",
        content:"GlowWindowBehavior",
        description:'',
        tags:''
    });

    a({
        id:102,
        title:"TransitionType",
        content:"TransitionType",
        description:'',
        tags:''
    });

    a({
        id:103,
        title:"ToLowerConverter",
        content:"ToLowerConverter",
        description:'',
        tags:''
    });

    a({
        id:104,
        title:"RangeSelectionChangedEventHandler",
        content:"RangeSelectionChangedEventHandler",
        description:'',
        tags:''
    });

    a({
        id:105,
        title:"MouseWheelState",
        content:"MouseWheelState",
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
        title:"WINDOWPLACEMENT",
        content:"WINDOWPLACEMENT",
        description:'',
        tags:''
    });

    a({
        id:108,
        title:"MahAppsException",
        content:"MahAppsException",
        description:'',
        tags:''
    });

    a({
        id:109,
        title:"Utils",
        content:"Utils",
        description:'',
        tags:''
    });

    a({
        id:110,
        title:"MetroProgressBar",
        content:"MetroProgressBar",
        description:'',
        tags:''
    });

    a({
        id:111,
        title:"BackgroundToForegroundConverter",
        content:"BackgroundToForegroundConverter",
        description:'',
        tags:''
    });

    a({
        id:112,
        title:"HamburgerMenuItem",
        content:"HamburgerMenuItem",
        description:'',
        tags:''
    });

    a({
        id:113,
        title:"RangeSlider",
        content:"RangeSlider",
        description:'',
        tags:''
    });

    a({
        id:114,
        title:"WindowButtonCommands ClosingWindowEventHandler",
        content:"WindowButtonCommands ClosingWindowEventHandler",
        description:'',
        tags:''
    });

    a({
        id:115,
        title:"WindowSettings",
        content:"WindowSettings",
        description:'',
        tags:''
    });

    a({
        id:116,
        title:"MetroThumbContentControl",
        content:"MetroThumbContentControl",
        description:'',
        tags:''
    });

    a({
        id:117,
        title:"Extensions",
        content:"Extensions",
        description:'',
        tags:''
    });

    a({
        id:118,
        title:"RectangleHeightToRadiusConverter",
        content:"RectangleHeightToRadiusConverter",
        description:'',
        tags:''
    });

    a({
        id:119,
        title:"MetroDialogColorScheme",
        content:"MetroDialogColorScheme",
        description:'',
        tags:''
    });

    a({
        id:120,
        title:"FontSizeOffsetConverter",
        content:"FontSizeOffsetConverter",
        description:'',
        tags:''
    });

    a({
        id:121,
        title:"ComboBoxHelper",
        content:"ComboBoxHelper",
        description:'',
        tags:''
    });

    a({
        id:122,
        title:"LoginDialog",
        content:"LoginDialog",
        description:'',
        tags:''
    });

    a({
        id:123,
        title:"LoginDialogSettings",
        content:"LoginDialogSettings",
        description:'',
        tags:''
    });

    a({
        id:124,
        title:"DataGridCellHelper",
        content:"DataGridCellHelper",
        description:'',
        tags:''
    });

    a({
        id:125,
        title:"UnderlinedType",
        content:"UnderlinedType",
        description:'',
        tags:''
    });

    a({
        id:126,
        title:"DropDownButton",
        content:"DropDownButton",
        description:'',
        tags:''
    });

    a({
        id:127,
        title:"Theme",
        content:"Theme",
        description:'',
        tags:''
    });

    a({
        id:128,
        title:"DateTimePicker",
        content:"DateTimePicker",
        description:'',
        tags:''
    });

    a({
        id:129,
        title:"MultiFrameImageMode",
        content:"MultiFrameImageMode",
        description:'',
        tags:''
    });

    a({
        id:130,
        title:"MetroTabItem",
        content:"MetroTabItem",
        description:'',
        tags:''
    });

    a({
        id:131,
        title:"ThicknessSideType",
        content:"ThicknessSideType",
        description:'',
        tags:''
    });

    a({
        id:132,
        title:"ToggleSwitchButton",
        content:"ToggleSwitchButton",
        description:'',
        tags:''
    });

    a({
        id:133,
        title:"LayoutInvalidationCatcher",
        content:"LayoutInvalidationCatcher",
        description:'',
        tags:''
    });

    a({
        id:134,
        title:"DatePickerTextBoxBehavior",
        content:"DatePickerTextBoxBehavior",
        description:'',
        tags:''
    });

    a({
        id:135,
        title:"TransitioningContentControl",
        content:"TransitioningContentControl",
        description:'',
        tags:''
    });

    a({
        id:136,
        title:"NumericUpDownChangedRoutedEventHandler",
        content:"NumericUpDownChangedRoutedEventHandler",
        description:'',
        tags:''
    });

    a({
        id:137,
        title:"MessageDialog",
        content:"MessageDialog",
        description:'',
        tags:''
    });

    a({
        id:138,
        title:"ToggleButtonHelper",
        content:"ToggleButtonHelper",
        description:'',
        tags:''
    });

    a({
        id:139,
        title:"BaseMetroDialog",
        content:"BaseMetroDialog",
        description:'',
        tags:''
    });

    a({
        id:140,
        title:"StylizedBehaviorCollection",
        content:"StylizedBehaviorCollection",
        description:'',
        tags:''
    });

    a({
        id:141,
        title:"ThicknessBindingConverter",
        content:"ThicknessBindingConverter",
        description:'',
        tags:''
    });

    a({
        id:142,
        title:"DialogCoordinator",
        content:"DialogCoordinator",
        description:'',
        tags:''
    });

    a({
        id:143,
        title:"MessageDialogResult",
        content:"MessageDialogResult",
        description:'',
        tags:''
    });

    a({
        id:144,
        title:"MetroContentControl",
        content:"MetroContentControl",
        description:'',
        tags:''
    });

    a({
        id:145,
        title:"SetFlyoutOpenAction",
        content:"SetFlyoutOpenAction",
        description:'',
        tags:''
    });

    a({
        id:146,
        title:"ResizeModeMinMaxButtonVisibilityConverter",
        content:"ResizeModeMinMaxButtonVisibilityConverter",
        description:'',
        tags:''
    });

    a({
        id:147,
        title:"StylizedBehaviors",
        content:"StylizedBehaviors",
        description:'',
        tags:''
    });

    a({
        id:148,
        title:"TimePartVisibility",
        content:"TimePartVisibility",
        description:'',
        tags:''
    });

    a({
        id:149,
        title:"MetroAnimatedSingleRowTabControl",
        content:"MetroAnimatedSingleRowTabControl",
        description:'',
        tags:''
    });

    a({
        id:150,
        title:"ItemClickEventArgs",
        content:"ItemClickEventArgs",
        description:'',
        tags:''
    });

    a({
        id:151,
        title:"ReloadBehavior",
        content:"ReloadBehavior",
        description:'',
        tags:''
    });

    a({
        id:152,
        title:"MultiFrameImage",
        content:"MultiFrameImage",
        description:'',
        tags:''
    });

    a({
        id:153,
        title:"CustomDialog",
        content:"CustomDialog",
        description:'',
        tags:''
    });

    a({
        id:154,
        title:"ScrollViewerOffsetMediator",
        content:"ScrollViewerOffsetMediator",
        description:'',
        tags:''
    });

    a({
        id:155,
        title:"DialogStateChangedEventArgs",
        content:"DialogStateChangedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:156,
        title:"PasswordBoxHelper",
        content:"PasswordBoxHelper",
        description:'',
        tags:''
    });

    a({
        id:157,
        title:"ClipBorder",
        content:"ClipBorder",
        description:'',
        tags:''
    });

    a({
        id:158,
        title:"DataGridRowHelper",
        content:"DataGridRowHelper",
        description:'',
        tags:''
    });

    a({
        id:159,
        title:"Tile",
        content:"Tile",
        description:'',
        tags:''
    });

    a({
        id:160,
        title:"TextBoxHelper",
        content:"TextBoxHelper",
        description:'',
        tags:''
    });

    a({
        id:161,
        title:"CloseTabItemAction",
        content:"CloseTabItemAction",
        description:'',
        tags:''
    });

    a({
        id:162,
        title:"PivotItem",
        content:"PivotItem",
        description:'',
        tags:''
    });

    a({
        id:163,
        title:"SplitView",
        content:"SplitView",
        description:'',
        tags:''
    });

    a({
        id:164,
        title:"ClockDegreeConverter",
        content:"ClockDegreeConverter",
        description:'',
        tags:''
    });

    a({
        id:165,
        title:"Underline",
        content:"Underline",
        description:'',
        tags:''
    });

    a({
        id:166,
        title:"InputDialog",
        content:"InputDialog",
        description:'',
        tags:''
    });

    a({
        id:167,
        title:"OffOnConverter",
        content:"OffOnConverter",
        description:'',
        tags:''
    });

    a({
        id:168,
        title:"MarkupConverter",
        content:"MarkupConverter",
        description:'',
        tags:''
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/groupboxhelper',
        title:"GroupBoxHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.converters/nulltounsetvalueconverter',
        title:"NullToUnsetValueConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/rangeparameterchangetype',
        title:"RangeParameterChangeType",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls.dialogs/messagedialogstyle',
        title:"MessageDialogStyle",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro/apptheme',
        title:"AppTheme",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls.dialogs/dialogparticipation',
        title:"DialogParticipation",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro/thememanager',
        title:"ThemeManager",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/flipviewitem',
        title:"FlipViewItem",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/hamburgermenuitemcollection',
        title:"HamburgerMenuItemCollection",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/metrothumbcontentcontroldragstartedeventargs',
        title:"MetroThumbContentControlDragStartedEventArgs",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/timepicker',
        title:"TimePicker",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/metrowindow',
        title:"MetroWindow",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/flipview',
        title:"FlipView",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/gridlengthanimation',
        title:"GridLengthAnimation",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/buttonsalignment',
        title:"ButtonsAlignment",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls.dialogs/progressdialog',
        title:"ProgressDialog",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro/onthemechangedeventargs',
        title:"OnThemeChangedEventArgs",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/visibilityhelper',
        title:"VisibilityHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/windowcommandsoverlaybehavior',
        title:"WindowCommandsOverlayBehavior",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/glow',
        title:"Glow",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/rangeselectionchangedeventargs',
        title:"RangeSelectionChangedEventArgs",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.behaviours/windowssettingbehaviour',
        title:"WindowsSettingBehaviour",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/hamburgermenuglyphitem',
        title:"HamburgerMenuGlyphItem",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/closingwindoweventhandlerargs',
        title:"ClosingWindowEventHandlerArgs",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.converters/stringtovisibilityconverter',
        title:"StringToVisibilityConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro/accent',
        title:"Accent",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/hotkey',
        title:"HotKey",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/hotkeybox',
        title:"HotKeyBox",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/numericupdownchangedroutedeventargs',
        title:"NumericUpDownChangedRoutedEventArgs",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/planerator',
        title:"Planerator",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.converters/metrotabitemclosebuttonwidthconverter',
        title:"MetroTabItemCloseButtonWidthConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/imetrothumb',
        title:"IMetroThumb",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/toggleswitch',
        title:"ToggleSwitch",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/iwindowplacementsettings',
        title:"IWindowPlacementSettings",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/rangeparameterchangedeventhandler',
        title:"RangeParameterChangedEventHandler",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/metronavigationwindow',
        title:"MetroNavigationWindow",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/windowcommandsitem',
        title:"WindowCommandsItem",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/metrotabcontrol',
        title:"MetroTabControl",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/windowbuttoncommands',
        title:"WindowButtonCommands",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls.dialogs/logindialogdata',
        title:"LoginDialogData",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/timepickerbaseselectionchangedeventargs_1',
        title:"TimePickerBaseSelectionChangedEventArgs<T>",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/flyouttheme',
        title:"FlyoutTheme",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/timepickerformat',
        title:"TimePickerFormat",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.behaviours/tabcontrolselectfirstvisibletabbehavior',
        title:"TabControlSelectFirstVisibleTabBehavior",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/pivot',
        title:"Pivot",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/contentcontrolex',
        title:"ContentControlEx",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.behaviours/borderlesswindowbehavior',
        title:"BorderlessWindowBehavior",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/tabitemclosingeventargs',
        title:"BaseMetroTabControl.TabItemClosingEventArgs",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/badged',
        title:"Badged",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.native/point',
        title:"POINT",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.behaviours/passwordboxbindingbehavior',
        title:"PasswordBoxBindingBehavior",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/glowdirection',
        title:"GlowDirection",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/tabcontrolhelper',
        title:"TabControlHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/datagridhelper',
        title:"DataGridHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/datagridnumericupdowncolumn',
        title:"DataGridNumericUpDownColumn",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/rangeparameterchangedeventargs',
        title:"RangeParameterChangedEventArgs",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.converters/toupperconverter',
        title:"ToUpperConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/expanderhelper',
        title:"ExpanderHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/windowcommands',
        title:"WindowCommands",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/mousewheelchange',
        title:"MouseWheelChange",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/numericupdown',
        title:"NumericUpDown",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/metrothumbcontentcontroldragcompletedeventargs',
        title:"MetroThumbContentControlDragCompletedEventArgs",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/revealimage',
        title:"RevealImage",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/position',
        title:"Position",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls.dialogs/progressdialogcontroller',
        title:"ProgressDialogController",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.native/rect',
        title:"RECT",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/winapihelper',
        title:"WinApiHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.behaviours/bindableresourcebehavior',
        title:"BindableResourceBehavior",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/basemetrotabcontrol',
        title:"BaseMetroTabControl",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/flyoutscontrol',
        title:"FlyoutsControl",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/scrollbarhelper',
        title:"ScrollBarHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/flyout',
        title:"Flyout",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/splitbutton',
        title:"SplitButton",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/metroanimatedtabcontrol',
        title:"MetroAnimatedTabControl",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls.dialogs/dialogmanager',
        title:"DialogManager",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/controlshelper',
        title:"ControlsHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/tabitemclosingeventhandler',
        title:"BaseMetroTabControl.TabItemClosingEventHandler",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.converters/treeviewitemextensions',
        title:"TreeViewItemExtensions",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.behaviours/tiltbehavior',
        title:"TiltBehavior",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.converters/treeviewmarginconverter',
        title:"TreeViewMarginConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/itemclickeventhandler',
        title:"ItemClickEventHandler",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/hamburgermenu',
        title:"HamburgerMenu",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/splitviewpaneclosingeventargs',
        title:"SplitViewPaneClosingEventArgs",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls.dialogs/metrodialogsettings',
        title:"MetroDialogSettings",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/spelling',
        title:"Spelling",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/flyoutstatuschangedroutedeventargs',
        title:"MetroWindow.FlyoutStatusChangedRoutedEventArgs",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/splitviewdisplaymode',
        title:"SplitViewDisplayMode",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/buttonhelper',
        title:"ButtonHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls.dialogs/idialogcoordinator',
        title:"IDialogCoordinator",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/customvalidationpopup',
        title:"CustomValidationPopup",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/hamburgermenuimageitem',
        title:"HamburgerMenuImageItem",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/metrothumb',
        title:"MetroThumb",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/splitviewpaneplacement',
        title:"SplitViewPanePlacement",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/hamburgermenuiconitem',
        title:"HamburgerMenuIconItem",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/treehelper',
        title:"TreeHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.converters/isnullconverter',
        title:"IsNullConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.converters/thicknesstodoubleconverter',
        title:"ThicknessToDoubleConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/metrothumbcontentcontrolautomationpeer',
        title:"MetroThumbContentControlAutomationPeer",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/splitviewtemplatesettings',
        title:"SplitViewTemplateSettings",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/sliderhelper',
        title:"SliderHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/progressring',
        title:"ProgressRing",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.behaviours/glowwindowbehavior',
        title:"GlowWindowBehavior",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/transitiontype',
        title:"TransitionType",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.converters/tolowerconverter',
        title:"ToLowerConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/rangeselectionchangedeventhandler',
        title:"RangeSelectionChangedEventHandler",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/mousewheelstate',
        title:"MouseWheelState",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/timepickerbase',
        title:"TimePickerBase",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.native/windowplacement',
        title:"WINDOWPLACEMENT",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro/mahappsexception',
        title:"MahAppsException",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/utils',
        title:"Utils",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/metroprogressbar',
        title:"MetroProgressBar",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.converters/backgroundtoforegroundconverter',
        title:"BackgroundToForegroundConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/hamburgermenuitem',
        title:"HamburgerMenuItem",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/rangeslider',
        title:"RangeSlider",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/closingwindoweventhandler',
        title:"WindowButtonCommands.ClosingWindowEventHandler",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/windowsettings',
        title:"WindowSettings",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/metrothumbcontentcontrol',
        title:"MetroThumbContentControl",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/extensions',
        title:"Extensions",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.converters/rectangleheighttoradiusconverter',
        title:"RectangleHeightToRadiusConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls.dialogs/metrodialogcolorscheme',
        title:"MetroDialogColorScheme",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.converters/fontsizeoffsetconverter',
        title:"FontSizeOffsetConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/comboboxhelper',
        title:"ComboBoxHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls.dialogs/logindialog',
        title:"LoginDialog",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls.dialogs/logindialogsettings',
        title:"LoginDialogSettings",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/datagridcellhelper',
        title:"DataGridCellHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/underlinedtype',
        title:"UnderlinedType",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/dropdownbutton',
        title:"DropDownButton",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/theme',
        title:"Theme",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/datetimepicker',
        title:"DateTimePicker",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/multiframeimagemode',
        title:"MultiFrameImageMode",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/metrotabitem',
        title:"MetroTabItem",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.converters/thicknesssidetype',
        title:"ThicknessSideType",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/toggleswitchbutton',
        title:"ToggleSwitchButton",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/layoutinvalidationcatcher',
        title:"LayoutInvalidationCatcher",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.behaviours/datepickertextboxbehavior',
        title:"DatePickerTextBoxBehavior",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/transitioningcontentcontrol',
        title:"TransitioningContentControl",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/numericupdownchangedroutedeventhandler',
        title:"NumericUpDownChangedRoutedEventHandler",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls.dialogs/messagedialog',
        title:"MessageDialog",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/togglebuttonhelper',
        title:"ToggleButtonHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls.dialogs/basemetrodialog',
        title:"BaseMetroDialog",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.behaviours/stylizedbehaviorcollection',
        title:"StylizedBehaviorCollection",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.converters/thicknessbindingconverter',
        title:"ThicknessBindingConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls.dialogs/dialogcoordinator',
        title:"DialogCoordinator",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls.dialogs/messagedialogresult',
        title:"MessageDialogResult",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/metrocontentcontrol',
        title:"MetroContentControl",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.actions/setflyoutopenaction',
        title:"SetFlyoutOpenAction",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.converters/resizemodeminmaxbuttonvisibilityconverter',
        title:"ResizeModeMinMaxButtonVisibilityConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.behaviours/stylizedbehaviors',
        title:"StylizedBehaviors",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/timepartvisibility',
        title:"TimePartVisibility",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/metroanimatedsinglerowtabcontrol',
        title:"MetroAnimatedSingleRowTabControl",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/itemclickeventargs',
        title:"ItemClickEventArgs",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.behaviours/reloadbehavior',
        title:"ReloadBehavior",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/multiframeimage',
        title:"MultiFrameImage",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls.dialogs/customdialog',
        title:"CustomDialog",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/scrollvieweroffsetmediator',
        title:"ScrollViewerOffsetMediator",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls.dialogs/dialogstatechangedeventargs',
        title:"DialogStateChangedEventArgs",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/passwordboxhelper',
        title:"PasswordBoxHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/clipborder',
        title:"ClipBorder",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/datagridrowhelper',
        title:"DataGridRowHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/tile',
        title:"Tile",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/textboxhelper',
        title:"TextBoxHelper",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.actions/closetabitemaction',
        title:"CloseTabItemAction",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/pivotitem',
        title:"PivotItem",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/splitview',
        title:"SplitView",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.converters/clockdegreeconverter',
        title:"ClockDegreeConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls/underline',
        title:"Underline",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.controls.dialogs/inputdialog',
        title:"InputDialog",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.converters/offonconverter',
        title:"OffOnConverter",
        description:""
    });

    y({
        url:'/mahapps.metro.docs.wyam/mahapps.metro.docs.wyam/api/mahapps.metro.converters/markupconverter',
        title:"MarkupConverter",
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
