
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
        title:"IViewLocator",
        content:"IViewLocator",
        description:'',
        tags:''
    });

    a({
        id:1,
        title:"MetroTabControl",
        content:"MetroTabControl",
        description:'',
        tags:''
    });

    a({
        id:2,
        title:"Int IndexToNumberConverter",
        content:"Int IndexToNumberConverter",
        description:'',
        tags:''
    });

    a({
        id:3,
        title:"ShellViewModel",
        content:"ShellViewModel",
        description:'',
        tags:''
    });

    a({
        id:4,
        title:"MessageDialogResult",
        content:"MessageDialogResult",
        description:'',
        tags:''
    });

    a({
        id:5,
        title:"RangeParameterChangeType",
        content:"RangeParameterChangeType",
        description:'',
        tags:''
    });

    a({
        id:6,
        title:"IMetroThumb",
        content:"IMetroThumb",
        description:'',
        tags:''
    });

    a({
        id:7,
        title:"SelectionExamples",
        content:"SelectionExamples",
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
        title:"MessageDialog",
        content:"MessageDialog",
        description:'',
        tags:''
    });

    a({
        id:10,
        title:"InteropDemo",
        content:"InteropDemo",
        description:'',
        tags:''
    });

    a({
        id:11,
        title:"DateTimePicker",
        content:"DateTimePicker",
        description:'',
        tags:''
    });

    a({
        id:12,
        title:"SimpleCommand",
        content:"SimpleCommand",
        description:'',
        tags:''
    });

    a({
        id:13,
        title:"LoginDialogSettings",
        content:"LoginDialogSettings",
        description:'',
        tags:''
    });

    a({
        id:14,
        title:"DataGridRowHelper",
        content:"DataGridRowHelper",
        description:'',
        tags:''
    });

    a({
        id:15,
        title:"Underline",
        content:"Underline",
        description:'',
        tags:''
    });

    a({
        id:16,
        title:"IWindowPlacementSettings",
        content:"IWindowPlacementSettings",
        description:'',
        tags:''
    });

    a({
        id:17,
        title:"ControlsHelper",
        content:"ControlsHelper",
        description:'',
        tags:''
    });

    a({
        id:18,
        title:"BindingProxy",
        content:"BindingProxy",
        description:'',
        tags:''
    });

    a({
        id:19,
        title:"PivotItem",
        content:"PivotItem",
        description:'',
        tags:''
    });

    a({
        id:20,
        title:"SliderProgressExamples",
        content:"SliderProgressExamples",
        description:'',
        tags:''
    });

    a({
        id:21,
        title:"FlyoutBottomViewModel",
        content:"FlyoutBottomViewModel",
        description:'',
        tags:''
    });

    a({
        id:22,
        title:"MouseWheelChange",
        content:"MouseWheelChange",
        description:'',
        tags:''
    });

    a({
        id:23,
        title:"MetroThumbContentControl",
        content:"MetroThumbContentControl",
        description:'',
        tags:''
    });

    a({
        id:24,
        title:"Accent",
        content:"Accent",
        description:'',
        tags:''
    });

    a({
        id:25,
        title:"DropDownButton",
        content:"DropDownButton",
        description:'',
        tags:''
    });

    a({
        id:26,
        title:"HamburgerMenu",
        content:"HamburgerMenu",
        description:'',
        tags:''
    });

    a({
        id:27,
        title:"Album",
        content:"Album",
        description:'',
        tags:''
    });

    a({
        id:28,
        title:"MouseWheelState",
        content:"MouseWheelState",
        description:'',
        tags:''
    });

    a({
        id:29,
        title:"WindowCommandsOverlayBehavior",
        content:"WindowCommandsOverlayBehavior",
        description:'',
        tags:''
    });

    a({
        id:30,
        title:"MultiFrameImage",
        content:"MultiFrameImage",
        description:'',
        tags:''
    });

    a({
        id:31,
        title:"LoginDialogData",
        content:"LoginDialogData",
        description:'',
        tags:''
    });

    a({
        id:32,
        title:"InterestingPage",
        content:"InterestingPage",
        description:'',
        tags:''
    });

    a({
        id:33,
        title:"DialogParticipation",
        content:"DialogParticipation",
        description:'',
        tags:''
    });

    a({
        id:34,
        title:"WinApiHelper",
        content:"WinApiHelper",
        description:'',
        tags:''
    });

    a({
        id:35,
        title:"HamburgerMenuItem",
        content:"HamburgerMenuItem",
        description:'',
        tags:''
    });

    a({
        id:36,
        title:"WindowChrome",
        content:"WindowChrome",
        description:'',
        tags:''
    });

    a({
        id:37,
        title:"StringToVisibilityConverter",
        content:"StringToVisibilityConverter",
        description:'',
        tags:''
    });

    a({
        id:38,
        title:"AppTheme",
        content:"AppTheme",
        description:'',
        tags:''
    });

    a({
        id:39,
        title:"IShell",
        content:"IShell",
        description:'',
        tags:''
    });

    a({
        id:40,
        title:"TilesExample",
        content:"TilesExample",
        description:'',
        tags:''
    });

    a({
        id:41,
        title:"ToggleSwitch",
        content:"ToggleSwitch",
        description:'',
        tags:''
    });

    a({
        id:42,
        title:"SetFlyoutOpenAction",
        content:"SetFlyoutOpenAction",
        description:'',
        tags:''
    });

    a({
        id:43,
        title:"Extensions",
        content:"Extensions",
        description:'',
        tags:''
    });

    a({
        id:44,
        title:"MetroThumbContentControlAutomationPeer",
        content:"MetroThumbContentControlAutomationPeer",
        description:'',
        tags:''
    });

    a({
        id:45,
        title:"PasswordBoxHelper",
        content:"PasswordBoxHelper",
        description:'',
        tags:''
    });

    a({
        id:46,
        title:"CustomDialogExampleContent",
        content:"CustomDialogExampleContent",
        description:'',
        tags:''
    });

    a({
        id:47,
        title:"MetroThumbContentControlDragStartedEventArgs",
        content:"MetroThumbContentControlDragStartedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:48,
        title:"ShowcaseFlyout",
        content:"ShowcaseFlyout",
        description:'',
        tags:''
    });

    a({
        id:49,
        title:"ScrollViewerOffsetMediator",
        content:"ScrollViewerOffsetMediator",
        description:'',
        tags:''
    });

    a({
        id:50,
        title:"BindableResourceBehavior",
        content:"BindableResourceBehavior",
        description:'',
        tags:''
    });

    a({
        id:51,
        title:"WindowSettings",
        content:"WindowSettings",
        description:'',
        tags:''
    });

    a({
        id:52,
        title:"WindowButtonCommands ClosingWindowEventHandler",
        content:"WindowButtonCommands ClosingWindowEventHandler",
        description:'',
        tags:''
    });

    a({
        id:53,
        title:"MessageDialogStyle",
        content:"MessageDialogStyle",
        description:'',
        tags:''
    });

    a({
        id:54,
        title:"AlbumPriceIsTooMuchConverter",
        content:"AlbumPriceIsTooMuchConverter",
        description:'',
        tags:''
    });

    a({
        id:55,
        title:"GridLengthAnimation",
        content:"GridLengthAnimation",
        description:'',
        tags:''
    });

    a({
        id:56,
        title:"AppBootstrapper",
        content:"AppBootstrapper",
        description:'',
        tags:''
    });

    a({
        id:57,
        title:"RangeSelectionChangedEventArgs",
        content:"RangeSelectionChangedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:58,
        title:"StartupTasks",
        content:"StartupTasks",
        description:'',
        tags:''
    });

    a({
        id:59,
        title:"HotKeyBox",
        content:"HotKeyBox",
        description:'',
        tags:''
    });

    a({
        id:60,
        title:"MetroTabItemCloseButtonWidthConverter",
        content:"MetroTabItemCloseButtonWidthConverter",
        description:'',
        tags:''
    });

    a({
        id:61,
        title:"DataGridCellHelper",
        content:"DataGridCellHelper",
        description:'',
        tags:''
    });

    a({
        id:62,
        title:"SplitViewPaneClosingEventArgs",
        content:"SplitViewPaneClosingEventArgs",
        description:'',
        tags:''
    });

    a({
        id:63,
        title:"RangeParameterChangedEventArgs",
        content:"RangeParameterChangedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:64,
        title:"WindowCommands",
        content:"WindowCommands",
        description:'',
        tags:''
    });

    a({
        id:65,
        title:"SacrificialEdge",
        content:"SacrificialEdge",
        description:'',
        tags:''
    });

    a({
        id:66,
        title:"MefServiceLocator",
        content:"MefServiceLocator",
        description:'',
        tags:''
    });

    a({
        id:67,
        title:"VisibilityHelper",
        content:"VisibilityHelper",
        description:'',
        tags:''
    });

    a({
        id:68,
        title:"Glow",
        content:"Glow",
        description:'',
        tags:''
    });

    a({
        id:69,
        title:"StylizedBehaviorCollection",
        content:"StylizedBehaviorCollection",
        description:'',
        tags:''
    });

    a({
        id:70,
        title:"MetroWindow FlyoutStatusChangedRoutedEventArgs",
        content:"MetroWindow FlyoutStatusChangedRoutedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:71,
        title:"MetroThumbContentControlDragCompletedEventArgs",
        content:"MetroThumbContentControlDragCompletedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:72,
        title:"BaseMetroTabControl TabItemClosingEventHandler",
        content:"BaseMetroTabControl TabItemClosingEventHandler",
        description:'',
        tags:''
    });

    a({
        id:73,
        title:"RevealImage",
        content:"RevealImage",
        description:'',
        tags:''
    });

    a({
        id:74,
        title:"ReloadBehavior",
        content:"ReloadBehavior",
        description:'',
        tags:''
    });

    a({
        id:75,
        title:"DatePickerTextBoxBehavior",
        content:"DatePickerTextBoxBehavior",
        description:'',
        tags:''
    });

    a({
        id:76,
        title:"MetroAnimatedSingleRowTabControl",
        content:"MetroAnimatedSingleRowTabControl",
        description:'',
        tags:''
    });

    a({
        id:77,
        title:"Flyout",
        content:"Flyout",
        description:'',
        tags:''
    });

    a({
        id:78,
        title:"Utils",
        content:"Utils",
        description:'',
        tags:''
    });

    a({
        id:79,
        title:"ViewLocator",
        content:"ViewLocator",
        description:'',
        tags:''
    });

    a({
        id:80,
        title:"SplitButton",
        content:"SplitButton",
        description:'',
        tags:''
    });

    a({
        id:81,
        title:"EnumBindingSourceExtension",
        content:"EnumBindingSourceExtension",
        description:'',
        tags:''
    });

    a({
        id:82,
        title:"ComboBoxHelper",
        content:"ComboBoxHelper",
        description:'',
        tags:''
    });

    a({
        id:83,
        title:"RangeParameterChangedEventHandler",
        content:"RangeParameterChangedEventHandler",
        description:'',
        tags:''
    });

    a({
        id:84,
        title:"Planerator",
        content:"Planerator",
        description:'',
        tags:''
    });

    a({
        id:85,
        title:"Flyout ViewModel",
        content:"Flyout ViewModel",
        description:'',
        tags:''
    });

    a({
        id:86,
        title:"SampleData",
        content:"SampleData",
        description:'',
        tags:''
    });

    a({
        id:87,
        title:"MetroTabItem",
        content:"MetroTabItem",
        description:'',
        tags:''
    });

    a({
        id:88,
        title:"FlyoutSettingsViewModel",
        content:"FlyoutSettingsViewModel",
        description:'',
        tags:''
    });

    a({
        id:89,
        title:"ItemClickEventArgs",
        content:"ItemClickEventArgs",
        description:'',
        tags:''
    });

    a({
        id:90,
        title:"AlbumPriceIsReallyTooMuchValidation",
        content:"AlbumPriceIsReallyTooMuchValidation",
        description:'',
        tags:''
    });

    a({
        id:91,
        title:"Pivot",
        content:"Pivot",
        description:'',
        tags:''
    });

    a({
        id:92,
        title:"ThemeManager",
        content:"ThemeManager",
        description:'',
        tags:''
    });

    a({
        id:93,
        title:"DialogStateChangedEventArgs",
        content:"DialogStateChangedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:94,
        title:"ThicknessToDoubleConverter",
        content:"ThicknessToDoubleConverter",
        description:'',
        tags:''
    });

    a({
        id:95,
        title:"AppThemeMenuData",
        content:"AppThemeMenuData",
        description:'',
        tags:''
    });

    a({
        id:96,
        title:"TreeViewItemExtensions",
        content:"TreeViewItemExtensions",
        description:'',
        tags:''
    });

    a({
        id:97,
        title:"CustomValidationPopup",
        content:"CustomValidationPopup",
        description:'',
        tags:''
    });

    a({
        id:98,
        title:"BaseMetroTabControl TabItemClosingEventArgs",
        content:"BaseMetroTabControl TabItemClosingEventArgs",
        description:'',
        tags:''
    });

    a({
        id:99,
        title:"Theme",
        content:"Theme",
        description:'',
        tags:''
    });

    a({
        id:100,
        title:"OnThemeChangedEventArgs",
        content:"OnThemeChangedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:101,
        title:"TaskEx",
        content:"TaskEx",
        description:'',
        tags:''
    });

    a({
        id:102,
        title:"CloseTabItemAction",
        content:"CloseTabItemAction",
        description:'',
        tags:''
    });

    a({
        id:103,
        title:"TreeViewMarginConverter",
        content:"TreeViewMarginConverter",
        description:'',
        tags:''
    });

    a({
        id:104,
        title:"ResizeGripDirection",
        content:"ResizeGripDirection",
        description:'',
        tags:''
    });

    a({
        id:105,
        title:"Spelling",
        content:"Spelling",
        description:'',
        tags:''
    });

    a({
        id:106,
        title:"CustomDialog",
        content:"CustomDialog",
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
        title:"FlyoutDemo",
        content:"FlyoutDemo",
        description:'',
        tags:''
    });

    a({
        id:109,
        title:"CleanWindowDemo",
        content:"CleanWindowDemo",
        description:'',
        tags:''
    });

    a({
        id:110,
        title:"ButtonsExample",
        content:"ButtonsExample",
        description:'',
        tags:''
    });

    a({
        id:111,
        title:"IServiceLocator",
        content:"IServiceLocator",
        description:'',
        tags:''
    });

    a({
        id:112,
        title:"InputDialog",
        content:"InputDialog",
        description:'',
        tags:''
    });

    a({
        id:113,
        title:"TimePartVisibility",
        content:"TimePartVisibility",
        description:'',
        tags:''
    });

    a({
        id:114,
        title:"ItemClickEventHandler",
        content:"ItemClickEventHandler",
        description:'',
        tags:''
    });

    a({
        id:115,
        title:"BorderlessWindowBehavior",
        content:"BorderlessWindowBehavior",
        description:'',
        tags:''
    });

    a({
        id:116,
        title:"DateExamples",
        content:"DateExamples",
        description:'',
        tags:''
    });

    a({
        id:117,
        title:"TextExamples",
        content:"TextExamples",
        description:'',
        tags:''
    });

    a({
        id:118,
        title:"FlyoutTheme",
        content:"FlyoutTheme",
        description:'',
        tags:''
    });

    a({
        id:119,
        title:"NtDll OSVERSIONINFOEX",
        content:"NtDll OSVERSIONINFOEX",
        description:'',
        tags:''
    });

    a({
        id:120,
        title:"ToggleButtonHelper",
        content:"ToggleButtonHelper",
        description:'',
        tags:''
    });

    a({
        id:121,
        title:"MetroDialogColorScheme",
        content:"MetroDialogColorScheme",
        description:'',
        tags:''
    });

    a({
        id:122,
        title:"DialogManager",
        content:"DialogManager",
        description:'',
        tags:''
    });

    a({
        id:123,
        title:"MetroThumb",
        content:"MetroThumb",
        description:'',
        tags:''
    });

    a({
        id:124,
        title:"FlyoutTopViewModel",
        content:"FlyoutTopViewModel",
        description:'',
        tags:''
    });

    a({
        id:125,
        title:"ButtonsAlignment",
        content:"ButtonsAlignment",
        description:'',
        tags:''
    });

    a({
        id:126,
        title:"BaseMetroDialog",
        content:"BaseMetroDialog",
        description:'',
        tags:''
    });

    a({
        id:127,
        title:"OffOnConverter",
        content:"OffOnConverter",
        description:'',
        tags:''
    });

    a({
        id:128,
        title:"MetroProgressBar",
        content:"MetroProgressBar",
        description:'',
        tags:''
    });

    a({
        id:129,
        title:"LayoutInvalidationCatcher",
        content:"LayoutInvalidationCatcher",
        description:'',
        tags:''
    });

    a({
        id:130,
        title:"RangeSelectionChangedEventHandler",
        content:"RangeSelectionChangedEventHandler",
        description:'',
        tags:''
    });

    a({
        id:131,
        title:"MetroAnimatedTabControl",
        content:"MetroAnimatedTabControl",
        description:'',
        tags:''
    });

    a({
        id:132,
        title:"ClosingWindowEventHandlerArgs",
        content:"ClosingWindowEventHandlerArgs",
        description:'',
        tags:''
    });

    a({
        id:133,
        title:"DateTimeNowBehavior",
        content:"DateTimeNowBehavior",
        description:'',
        tags:''
    });

    a({
        id:134,
        title:"WindowsSettingBehaviour",
        content:"WindowsSettingBehaviour",
        description:'',
        tags:''
    });

    a({
        id:135,
        title:"HamburgerMenuImageItem",
        content:"HamburgerMenuImageItem",
        description:'',
        tags:''
    });

    a({
        id:136,
        title:"FlyoutsControl",
        content:"FlyoutsControl",
        description:'',
        tags:''
    });

    a({
        id:137,
        title:"WindowCommandsItem",
        content:"WindowCommandsItem",
        description:'',
        tags:''
    });

    a({
        id:138,
        title:"ThemeManager",
        content:"ThemeManager",
        description:'',
        tags:''
    });

    a({
        id:139,
        title:"GlowWindowBehavior",
        content:"GlowWindowBehavior",
        description:'',
        tags:''
    });

    a({
        id:140,
        title:"Flyout ViewModel",
        content:"Flyout ViewModel",
        description:'',
        tags:''
    });

    a({
        id:141,
        title:"RectangleHeightToRadiusConverter",
        content:"RectangleHeightToRadiusConverter",
        description:'',
        tags:''
    });

    a({
        id:142,
        title:"FlyoutLeftViewModel",
        content:"FlyoutLeftViewModel",
        description:'',
        tags:''
    });

    a({
        id:143,
        title:"DataGridHelper",
        content:"DataGridHelper",
        description:'',
        tags:''
    });

    a({
        id:144,
        title:"RECT",
        content:"RECT",
        description:'',
        tags:''
    });

    a({
        id:145,
        title:"DialogCoordinator",
        content:"DialogCoordinator",
        description:'',
        tags:''
    });

    a({
        id:146,
        title:"IThemeManager",
        content:"IThemeManager",
        description:'',
        tags:''
    });

    a({
        id:147,
        title:"Genre",
        content:"Genre",
        description:'',
        tags:''
    });

    a({
        id:148,
        title:"ToggleSwitchButton",
        content:"ToggleSwitchButton",
        description:'',
        tags:''
    });

    a({
        id:149,
        title:"DataGridNumericUpDownColumn",
        content:"DataGridNumericUpDownColumn",
        description:'',
        tags:''
    });

    a({
        id:150,
        title:"MainWindowViewModel RandomDataTemplateSelector",
        content:"MainWindowViewModel RandomDataTemplateSelector",
        description:'',
        tags:''
    });

    a({
        id:151,
        title:"TabControlSelectFirstVisibleTabBehavior",
        content:"TabControlSelectFirstVisibleTabBehavior",
        description:'',
        tags:''
    });

    a({
        id:152,
        title:"OtherExamples",
        content:"OtherExamples",
        description:'',
        tags:''
    });

    a({
        id:153,
        title:"StylizedBehaviors",
        content:"StylizedBehaviors",
        description:'',
        tags:''
    });

    a({
        id:154,
        title:"TabControlExamples",
        content:"TabControlExamples",
        description:'',
        tags:''
    });

    a({
        id:155,
        title:"FlipView",
        content:"FlipView",
        description:'',
        tags:''
    });

    a({
        id:156,
        title:"ColorExample",
        content:"ColorExample",
        description:'',
        tags:''
    });

    a({
        id:157,
        title:"BaseMetroTabControl",
        content:"BaseMetroTabControl",
        description:'',
        tags:''
    });

    a({
        id:158,
        title:"ProgressDialogController",
        content:"ProgressDialogController",
        description:'',
        tags:''
    });

    a({
        id:159,
        title:"HamburgerMenuGlyphItem",
        content:"HamburgerMenuGlyphItem",
        description:'',
        tags:''
    });

    a({
        id:160,
        title:"TimePicker",
        content:"TimePicker",
        description:'',
        tags:''
    });

    a({
        id:161,
        title:"TimePickerBase",
        content:"TimePickerBase",
        description:'',
        tags:''
    });

    a({
        id:162,
        title:"App",
        content:"App",
        description:'',
        tags:''
    });

    a({
        id:163,
        title:"Badged",
        content:"Badged",
        description:'',
        tags:''
    });

    a({
        id:164,
        title:"SplitViewTemplateSettings",
        content:"SplitViewTemplateSettings",
        description:'',
        tags:''
    });

    a({
        id:165,
        title:"MainWindowViewModel",
        content:"MainWindowViewModel",
        description:'',
        tags:''
    });

    a({
        id:166,
        title:"NumericUpDown",
        content:"NumericUpDown",
        description:'',
        tags:''
    });

    a({
        id:167,
        title:"NtDll NativeMethods",
        content:"NtDll NativeMethods",
        description:'',
        tags:''
    });

    a({
        id:168,
        title:"MainWindow",
        content:"MainWindow",
        description:'',
        tags:''
    });

    a({
        id:169,
        title:"TextBoxHelper",
        content:"TextBoxHelper",
        description:'',
        tags:''
    });

    a({
        id:170,
        title:"ContentControlEx",
        content:"ContentControlEx",
        description:'',
        tags:''
    });

    a({
        id:171,
        title:"ButtonHelper",
        content:"ButtonHelper",
        description:'',
        tags:''
    });

    a({
        id:172,
        title:"Flyout ViewModel",
        content:"Flyout ViewModel",
        description:'',
        tags:''
    });

    a({
        id:173,
        title:"POINT",
        content:"POINT",
        description:'',
        tags:''
    });

    a({
        id:174,
        title:"NtDll",
        content:"NtDll",
        description:'',
        tags:''
    });

    a({
        id:175,
        title:"FontSizeOffsetConverter",
        content:"FontSizeOffsetConverter",
        description:'',
        tags:''
    });

    a({
        id:176,
        title:"IDialogCoordinator",
        content:"IDialogCoordinator",
        description:'',
        tags:''
    });

    a({
        id:177,
        title:"DynamicFlyout",
        content:"DynamicFlyout",
        description:'',
        tags:''
    });

    a({
        id:178,
        title:"ToLowerConverter",
        content:"ToLowerConverter",
        description:'',
        tags:''
    });

    a({
        id:179,
        title:"TreeHelper",
        content:"TreeHelper",
        description:'',
        tags:''
    });

    a({
        id:180,
        title:"HotKey",
        content:"HotKey",
        description:'',
        tags:''
    });

    a({
        id:181,
        title:"IsNullConverter",
        content:"IsNullConverter",
        description:'',
        tags:''
    });

    a({
        id:182,
        title:"DataGridExamples",
        content:"DataGridExamples",
        description:'',
        tags:''
    });

    a({
        id:183,
        title:"HamburgerMenuSample",
        content:"HamburgerMenuSample",
        description:'',
        tags:''
    });

    a({
        id:184,
        title:"SplitViewPanePlacement",
        content:"SplitViewPanePlacement",
        description:'',
        tags:''
    });

    a({
        id:185,
        title:"ScrollBarHelper",
        content:"ScrollBarHelper",
        description:'',
        tags:''
    });

    a({
        id:186,
        title:"ThicknessSideType",
        content:"ThicknessSideType",
        description:'',
        tags:''
    });

    a({
        id:187,
        title:"HomePage",
        content:"HomePage",
        description:'',
        tags:''
    });

    a({
        id:188,
        title:"ResizeModeMinMaxButtonVisibilityConverter",
        content:"ResizeModeMinMaxButtonVisibilityConverter",
        description:'',
        tags:''
    });

    a({
        id:189,
        title:"NullToUnsetValueConverter",
        content:"NullToUnsetValueConverter",
        description:'',
        tags:''
    });

    a({
        id:190,
        title:"GlowDirection",
        content:"GlowDirection",
        description:'',
        tags:''
    });

    a({
        id:191,
        title:"BackgroundToForegroundConverter",
        content:"BackgroundToForegroundConverter",
        description:'',
        tags:''
    });

    a({
        id:192,
        title:"ClockDegreeConverter",
        content:"ClockDegreeConverter",
        description:'',
        tags:''
    });

    a({
        id:193,
        title:"HamburgerMenuIconItem",
        content:"HamburgerMenuIconItem",
        description:'',
        tags:''
    });

    a({
        id:194,
        title:"Artist",
        content:"Artist",
        description:'',
        tags:''
    });

    a({
        id:195,
        title:"SplitView",
        content:"SplitView",
        description:'',
        tags:''
    });

    a({
        id:196,
        title:"SliderHelper",
        content:"SliderHelper",
        description:'',
        tags:''
    });

    a({
        id:197,
        title:"AccentColorMenuData",
        content:"AccentColorMenuData",
        description:'',
        tags:''
    });

    a({
        id:198,
        title:"RangeSlider",
        content:"RangeSlider",
        description:'',
        tags:''
    });

    a({
        id:199,
        title:"ClipBorder",
        content:"ClipBorder",
        description:'',
        tags:''
    });

    a({
        id:200,
        title:"UnderlinedType",
        content:"UnderlinedType",
        description:'',
        tags:''
    });

    a({
        id:201,
        title:"MahAppsException",
        content:"MahAppsException",
        description:'',
        tags:''
    });

    a({
        id:202,
        title:"ProgressRing",
        content:"ProgressRing",
        description:'',
        tags:''
    });

    a({
        id:203,
        title:"FlyoutBaseViewModel",
        content:"FlyoutBaseViewModel",
        description:'',
        tags:''
    });

    a({
        id:204,
        title:"TiltBehavior",
        content:"TiltBehavior",
        description:'',
        tags:''
    });

    a({
        id:205,
        title:"GroupBoxHelper",
        content:"GroupBoxHelper",
        description:'',
        tags:''
    });

    a({
        id:206,
        title:"ToUpperConverter",
        content:"ToUpperConverter",
        description:'',
        tags:''
    });

    a({
        id:207,
        title:"SplitViewDisplayMode",
        content:"SplitViewDisplayMode",
        description:'',
        tags:''
    });

    a({
        id:208,
        title:"ShowAboutCommand",
        content:"ShowAboutCommand",
        description:'',
        tags:''
    });

    a({
        id:209,
        title:"TimePickerFormat",
        content:"TimePickerFormat",
        description:'',
        tags:''
    });

    a({
        id:210,
        title:"MetroWindow",
        content:"MetroWindow",
        description:'',
        tags:''
    });

    a({
        id:211,
        title:"StartupTask",
        content:"StartupTask",
        description:'',
        tags:''
    });

    a({
        id:212,
        title:"ThicknessBindingConverter",
        content:"ThicknessBindingConverter",
        description:'',
        tags:''
    });

    a({
        id:213,
        title:"MetroDialogSettings",
        content:"MetroDialogSettings",
        description:'',
        tags:''
    });

    a({
        id:214,
        title:"MarkupConverter",
        content:"MarkupConverter",
        description:'',
        tags:''
    });

    a({
        id:215,
        title:"MetroContentControl",
        content:"MetroContentControl",
        description:'',
        tags:''
    });

    a({
        id:216,
        title:"Position",
        content:"Position",
        description:'',
        tags:''
    });

    a({
        id:217,
        title:"WindowButtonCommands",
        content:"WindowButtonCommands",
        description:'',
        tags:''
    });

    a({
        id:218,
        title:"SizeToContentDemo",
        content:"SizeToContentDemo",
        description:'',
        tags:''
    });

    a({
        id:219,
        title:"NumericUpDownChangedRoutedEventArgs",
        content:"NumericUpDownChangedRoutedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:220,
        title:"SplitViewExamples",
        content:"SplitViewExamples",
        description:'',
        tags:''
    });

    a({
        id:221,
        title:"MetroNavigationWindow",
        content:"MetroNavigationWindow",
        description:'',
        tags:''
    });

    a({
        id:222,
        title:"NumericUpDownChangedRoutedEventHandler",
        content:"NumericUpDownChangedRoutedEventHandler",
        description:'',
        tags:''
    });

    a({
        id:223,
        title:"LoginDialog",
        content:"LoginDialog",
        description:'',
        tags:''
    });

    a({
        id:224,
        title:"Tile",
        content:"Tile",
        description:'',
        tags:''
    });

    a({
        id:225,
        title:"CustomDialogExample",
        content:"CustomDialogExample",
        description:'',
        tags:''
    });

    a({
        id:226,
        title:"MultiFrameImageMode",
        content:"MultiFrameImageMode",
        description:'',
        tags:''
    });

    a({
        id:227,
        title:"TimePickerBaseSelectionChangedEventArgs",
        content:"TimePickerBaseSelectionChangedEventArgs",
        description:'',
        tags:''
    });

    a({
        id:228,
        title:"TabControlHelper",
        content:"TabControlHelper",
        description:'',
        tags:''
    });

    a({
        id:229,
        title:"PasswordBoxBindingBehavior",
        content:"PasswordBoxBindingBehavior",
        description:'',
        tags:''
    });

    a({
        id:230,
        title:"FlipViewItem",
        content:"FlipViewItem",
        description:'',
        tags:''
    });

    a({
        id:231,
        title:"VSDemo",
        content:"VSDemo",
        description:'',
        tags:''
    });

    a({
        id:232,
        title:"ExpanderHelper",
        content:"ExpanderHelper",
        description:'',
        tags:''
    });

    a({
        id:233,
        title:"ProgressDialog",
        content:"ProgressDialog",
        description:'',
        tags:''
    });

    a({
        id:234,
        title:"TransitioningContentControl",
        content:"TransitioningContentControl",
        description:'',
        tags:''
    });

    a({
        id:235,
        title:"TransitionType",
        content:"TransitionType",
        description:'',
        tags:''
    });

    y({
        url:'/api/Caliburn.Metro.Demo.Controls/IViewLocator',
        title:"IViewLocator",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/MetroTabControl',
        title:"MetroTabControl",
        description:""
    });

    y({
        url:'/api/MetroDemo.ValueConverter/Int32IndexToNumberConverter',
        title:"Int32IndexToNumberConverter",
        description:""
    });

    y({
        url:'/api/Caliburn.Metro.Demo.ViewModels/ShellViewModel',
        title:"ShellViewModel",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls.Dialogs/MessageDialogResult',
        title:"MessageDialogResult",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/RangeParameterChangeType',
        title:"RangeParameterChangeType",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/IMetroThumb',
        title:"IMetroThumb",
        description:""
    });

    y({
        url:'/api/MetroDemo.ExampleViews/SelectionExamples',
        title:"SelectionExamples",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/HamburgerMenuItemCollection',
        title:"HamburgerMenuItemCollection",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls.Dialogs/MessageDialog',
        title:"MessageDialog",
        description:""
    });

    y({
        url:'/api/MetroDemo.ExampleWindows/InteropDemo',
        title:"InteropDemo",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/DateTimePicker',
        title:"DateTimePicker",
        description:""
    });

    y({
        url:'/api/MetroDemo.Models/SimpleCommand',
        title:"SimpleCommand",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls.Dialogs/LoginDialogSettings',
        title:"LoginDialogSettings",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/DataGridRowHelper',
        title:"DataGridRowHelper",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/Underline',
        title:"Underline",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/IWindowPlacementSettings',
        title:"IWindowPlacementSettings",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/ControlsHelper',
        title:"ControlsHelper",
        description:""
    });

    y({
        url:'/api/MetroDemo.ExampleViews/BindingProxy',
        title:"BindingProxy",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/PivotItem',
        title:"PivotItem",
        description:""
    });

    y({
        url:'/api/MetroDemo.ExampleViews/SliderProgressExamples',
        title:"SliderProgressExamples",
        description:""
    });

    y({
        url:'/api/Caliburn.Metro.Demo.ViewModels.Flyouts/FlyoutBottomViewModel',
        title:"FlyoutBottomViewModel",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/MouseWheelChange',
        title:"MouseWheelChange",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/MetroThumbContentControl',
        title:"MetroThumbContentControl",
        description:""
    });

    y({
        url:'/api/MahApps.Metro/Accent',
        title:"Accent",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/DropDownButton',
        title:"DropDownButton",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/HamburgerMenu',
        title:"HamburgerMenu",
        description:""
    });

    y({
        url:'/api/MetroDemo.Models/Album',
        title:"Album",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/MouseWheelState',
        title:"MouseWheelState",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/WindowCommandsOverlayBehavior',
        title:"WindowCommandsOverlayBehavior",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/MultiFrameImage',
        title:"MultiFrameImage",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls.Dialogs/LoginDialogData',
        title:"LoginDialogData",
        description:""
    });

    y({
        url:'/api/MetroDemo.Navigation/InterestingPage',
        title:"InterestingPage",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls.Dialogs/DialogParticipation',
        title:"DialogParticipation",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/WinApiHelper',
        title:"WinApiHelper",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/HamburgerMenuItem',
        title:"HamburgerMenuItem",
        description:""
    });

    y({
        url:'/api/Microsoft.Windows.Shell/WindowChrome',
        title:"WindowChrome",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Converters/StringToVisibilityConverter',
        title:"StringToVisibilityConverter",
        description:""
    });

    y({
        url:'/api/MahApps.Metro/AppTheme',
        title:"AppTheme",
        description:""
    });

    y({
        url:'/api/Caliburn.Metro.Demo/IShell',
        title:"IShell",
        description:""
    });

    y({
        url:'/api/MetroDemo.ExampleViews/TilesExample',
        title:"TilesExample",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/ToggleSwitch',
        title:"ToggleSwitch",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Actions/SetFlyoutOpenAction',
        title:"SetFlyoutOpenAction",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/Extensions',
        title:"Extensions",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/MetroThumbContentControlAutomationPeer',
        title:"MetroThumbContentControlAutomationPeer",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/PasswordBoxHelper',
        title:"PasswordBoxHelper",
        description:""
    });

    y({
        url:'/api/MetroDemo.Models/CustomDialogExampleContent',
        title:"CustomDialogExampleContent",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/MetroThumbContentControlDragStartedEventArgs',
        title:"MetroThumbContentControlDragStartedEventArgs",
        description:""
    });

    y({
        url:'/api/MetroDemo.ExampleWindows/ShowcaseFlyout',
        title:"ShowcaseFlyout",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/ScrollViewerOffsetMediator',
        title:"ScrollViewerOffsetMediator",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Behaviours/BindableResourceBehavior',
        title:"BindableResourceBehavior",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/WindowSettings',
        title:"WindowSettings",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/ClosingWindowEventHandler',
        title:"WindowButtonCommands.ClosingWindowEventHandler",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls.Dialogs/MessageDialogStyle',
        title:"MessageDialogStyle",
        description:""
    });

    y({
        url:'/api/MetroDemo.ValueConverter/AlbumPriceIsTooMuchConverter',
        title:"AlbumPriceIsTooMuchConverter",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/GridLengthAnimation',
        title:"GridLengthAnimation",
        description:""
    });

    y({
        url:'/api/Caliburn.Metro.Demo/AppBootstrapper',
        title:"AppBootstrapper",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/RangeSelectionChangedEventArgs',
        title:"RangeSelectionChangedEventArgs",
        description:""
    });

    y({
        url:'/api/Caliburn.Metro.Demo.Controls/StartupTasks',
        title:"StartupTasks",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/HotKeyBox',
        title:"HotKeyBox",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Converters/MetroTabItemCloseButtonWidthConverter',
        title:"MetroTabItemCloseButtonWidthConverter",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/DataGridCellHelper',
        title:"DataGridCellHelper",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/SplitViewPaneClosingEventArgs',
        title:"SplitViewPaneClosingEventArgs",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/RangeParameterChangedEventArgs',
        title:"RangeParameterChangedEventArgs",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/WindowCommands',
        title:"WindowCommands",
        description:""
    });

    y({
        url:'/api/Microsoft.Windows.Shell/SacrificialEdge',
        title:"SacrificialEdge",
        description:""
    });

    y({
        url:'/api/Caliburn.Metro.Demo.Services/MefServiceLocator',
        title:"MefServiceLocator",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/VisibilityHelper',
        title:"VisibilityHelper",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/Glow',
        title:"Glow",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Behaviours/StylizedBehaviorCollection',
        title:"StylizedBehaviorCollection",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/FlyoutStatusChangedRoutedEventArgs',
        title:"MetroWindow.FlyoutStatusChangedRoutedEventArgs",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/MetroThumbContentControlDragCompletedEventArgs',
        title:"MetroThumbContentControlDragCompletedEventArgs",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/TabItemClosingEventHandler',
        title:"BaseMetroTabControl.TabItemClosingEventHandler",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/RevealImage',
        title:"RevealImage",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Behaviours/ReloadBehavior',
        title:"ReloadBehavior",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Behaviours/DatePickerTextBoxBehavior',
        title:"DatePickerTextBoxBehavior",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/MetroAnimatedSingleRowTabControl',
        title:"MetroAnimatedSingleRowTabControl",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/Flyout',
        title:"Flyout",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/Utils',
        title:"Utils",
        description:""
    });

    y({
        url:'/api/Caliburn.Metro.Demo.Controls/ViewLocator',
        title:"ViewLocator",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/SplitButton',
        title:"SplitButton",
        description:""
    });

    y({
        url:'/api/MetroDemo.Markup/EnumBindingSourceExtension',
        title:"EnumBindingSourceExtension",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/ComboBoxHelper',
        title:"ComboBoxHelper",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/RangeParameterChangedEventHandler',
        title:"RangeParameterChangedEventHandler",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/Planerator',
        title:"Planerator",
        description:""
    });

    y({
        url:'/api/Caliburn.Metro.Demo.ViewModels.Flyouts/Flyout3ViewModel',
        title:"Flyout3ViewModel",
        description:""
    });

    y({
        url:'/api/MetroDemo.Models/SampleData',
        title:"SampleData",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/MetroTabItem',
        title:"MetroTabItem",
        description:""
    });

    y({
        url:'/api/Caliburn.Metro.Demo.ViewModels.Flyouts/FlyoutSettingsViewModel',
        title:"FlyoutSettingsViewModel",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/ItemClickEventArgs',
        title:"ItemClickEventArgs",
        description:""
    });

    y({
        url:'/api/MetroDemo.ValueConverter/AlbumPriceIsReallyTooMuchValidation',
        title:"AlbumPriceIsReallyTooMuchValidation",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/Pivot',
        title:"Pivot",
        description:""
    });

    y({
        url:'/api/Caliburn.Metro.Demo.Controls/ThemeManager',
        title:"ThemeManager",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls.Dialogs/DialogStateChangedEventArgs',
        title:"DialogStateChangedEventArgs",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Converters/ThicknessToDoubleConverter',
        title:"ThicknessToDoubleConverter",
        description:""
    });

    y({
        url:'/api/MetroDemo/AppThemeMenuData',
        title:"AppThemeMenuData",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Converters/TreeViewItemExtensions',
        title:"TreeViewItemExtensions",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/CustomValidationPopup',
        title:"CustomValidationPopup",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/TabItemClosingEventArgs',
        title:"BaseMetroTabControl.TabItemClosingEventArgs",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/Theme',
        title:"Theme",
        description:""
    });

    y({
        url:'/api/MahApps.Metro/OnThemeChangedEventArgs',
        title:"OnThemeChangedEventArgs",
        description:""
    });

    y({
        url:'/api/MetroDemo/TaskEx',
        title:"TaskEx",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Actions/CloseTabItemAction',
        title:"CloseTabItemAction",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Converters/TreeViewMarginConverter',
        title:"TreeViewMarginConverter",
        description:""
    });

    y({
        url:'/api/Microsoft.Windows.Shell/ResizeGripDirection',
        title:"ResizeGripDirection",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/Spelling',
        title:"Spelling",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls.Dialogs/CustomDialog',
        title:"CustomDialog",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Native/WINDOWPLACEMENT',
        title:"WINDOWPLACEMENT",
        description:""
    });

    y({
        url:'/api/MetroDemo.ExampleWindows/FlyoutDemo',
        title:"FlyoutDemo",
        description:""
    });

    y({
        url:'/api/MetroDemo.ExampleWindows/CleanWindowDemo',
        title:"CleanWindowDemo",
        description:""
    });

    y({
        url:'/api/MetroDemo.ExampleViews/ButtonsExample',
        title:"ButtonsExample",
        description:""
    });

    y({
        url:'/api/Caliburn.Metro.Demo.Services/IServiceLocator',
        title:"IServiceLocator",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls.Dialogs/InputDialog',
        title:"InputDialog",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/TimePartVisibility',
        title:"TimePartVisibility",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/ItemClickEventHandler',
        title:"ItemClickEventHandler",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Behaviours/BorderlessWindowBehavior',
        title:"BorderlessWindowBehavior",
        description:""
    });

    y({
        url:'/api/MetroDemo.ExampleViews/DateExamples',
        title:"DateExamples",
        description:""
    });

    y({
        url:'/api/MetroDemo.ExampleViews/TextExamples',
        title:"TextExamples",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/FlyoutTheme',
        title:"FlyoutTheme",
        description:""
    });

    y({
        url:'/api/Standard/OSVERSIONINFOEX',
        title:"NtDll.OSVERSIONINFOEX",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/ToggleButtonHelper',
        title:"ToggleButtonHelper",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls.Dialogs/MetroDialogColorScheme',
        title:"MetroDialogColorScheme",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls.Dialogs/DialogManager',
        title:"DialogManager",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/MetroThumb',
        title:"MetroThumb",
        description:""
    });

    y({
        url:'/api/Caliburn.Metro.Demo.ViewModels.Flyouts/FlyoutTopViewModel',
        title:"FlyoutTopViewModel",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/ButtonsAlignment',
        title:"ButtonsAlignment",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls.Dialogs/BaseMetroDialog',
        title:"BaseMetroDialog",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Converters/OffOnConverter',
        title:"OffOnConverter",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/MetroProgressBar',
        title:"MetroProgressBar",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/LayoutInvalidationCatcher',
        title:"LayoutInvalidationCatcher",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/RangeSelectionChangedEventHandler',
        title:"RangeSelectionChangedEventHandler",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/MetroAnimatedTabControl',
        title:"MetroAnimatedTabControl",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/ClosingWindowEventHandlerArgs',
        title:"ClosingWindowEventHandlerArgs",
        description:""
    });

    y({
        url:'/api/MetroDemo.Behaviors/DateTimeNowBehavior',
        title:"DateTimeNowBehavior",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Behaviours/WindowsSettingBehaviour',
        title:"WindowsSettingBehaviour",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/HamburgerMenuImageItem',
        title:"HamburgerMenuImageItem",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/FlyoutsControl',
        title:"FlyoutsControl",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/WindowCommandsItem',
        title:"WindowCommandsItem",
        description:""
    });

    y({
        url:'/api/MahApps.Metro/ThemeManager',
        title:"ThemeManager",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Behaviours/GlowWindowBehavior',
        title:"GlowWindowBehavior",
        description:""
    });

    y({
        url:'/api/Caliburn.Metro.Demo.ViewModels.Flyouts/Flyout2ViewModel',
        title:"Flyout2ViewModel",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Converters/RectangleHeightToRadiusConverter',
        title:"RectangleHeightToRadiusConverter",
        description:""
    });

    y({
        url:'/api/Caliburn.Metro.Demo.ViewModels.Flyouts/FlyoutLeftViewModel',
        title:"FlyoutLeftViewModel",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/DataGridHelper',
        title:"DataGridHelper",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Native/RECT',
        title:"RECT",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls.Dialogs/DialogCoordinator',
        title:"DialogCoordinator",
        description:""
    });

    y({
        url:'/api/Caliburn.Metro.Demo.Controls/IThemeManager',
        title:"IThemeManager",
        description:""
    });

    y({
        url:'/api/MetroDemo.Models/Genre',
        title:"Genre",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/ToggleSwitchButton',
        title:"ToggleSwitchButton",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/DataGridNumericUpDownColumn',
        title:"DataGridNumericUpDownColumn",
        description:""
    });

    y({
        url:'/api/MetroDemo/RandomDataTemplateSelector',
        title:"MainWindowViewModel.RandomDataTemplateSelector",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Behaviours/TabControlSelectFirstVisibleTabBehavior',
        title:"TabControlSelectFirstVisibleTabBehavior",
        description:""
    });

    y({
        url:'/api/MetroDemo.ExampleViews/OtherExamples',
        title:"OtherExamples",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Behaviours/StylizedBehaviors',
        title:"StylizedBehaviors",
        description:""
    });

    y({
        url:'/api/MetroDemo.ExampleViews/TabControlExamples',
        title:"TabControlExamples",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/FlipView',
        title:"FlipView",
        description:""
    });

    y({
        url:'/api/MetroDemo.ExampleViews/ColorExample',
        title:"ColorExample",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/BaseMetroTabControl',
        title:"BaseMetroTabControl",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls.Dialogs/ProgressDialogController',
        title:"ProgressDialogController",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/HamburgerMenuGlyphItem',
        title:"HamburgerMenuGlyphItem",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/TimePicker',
        title:"TimePicker",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/TimePickerBase',
        title:"TimePickerBase",
        description:""
    });

    y({
        url:'/api/MetroDemo/App',
        title:"App",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/Badged',
        title:"Badged",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/SplitViewTemplateSettings',
        title:"SplitViewTemplateSettings",
        description:""
    });

    y({
        url:'/api/MetroDemo/MainWindowViewModel',
        title:"MainWindowViewModel",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/NumericUpDown',
        title:"NumericUpDown",
        description:""
    });

    y({
        url:'/api/Standard/NativeMethods',
        title:"NtDll.NativeMethods",
        description:""
    });

    y({
        url:'/api/MetroDemo/MainWindow',
        title:"MainWindow",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/TextBoxHelper',
        title:"TextBoxHelper",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/ContentControlEx',
        title:"ContentControlEx",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/ButtonHelper',
        title:"ButtonHelper",
        description:""
    });

    y({
        url:'/api/Caliburn.Metro.Demo.ViewModels.Flyouts/Flyout1ViewModel',
        title:"Flyout1ViewModel",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Native/POINT',
        title:"POINT",
        description:""
    });

    y({
        url:'/api/Standard/NtDll',
        title:"NtDll",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Converters/FontSizeOffsetConverter',
        title:"FontSizeOffsetConverter",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls.Dialogs/IDialogCoordinator',
        title:"IDialogCoordinator",
        description:""
    });

    y({
        url:'/api/MetroDemo.ExampleWindows/DynamicFlyout',
        title:"DynamicFlyout",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Converters/ToLowerConverter',
        title:"ToLowerConverter",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/TreeHelper',
        title:"TreeHelper",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/HotKey',
        title:"HotKey",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Converters/IsNullConverter',
        title:"IsNullConverter",
        description:""
    });

    y({
        url:'/api/MetroDemo.ExampleViews/DataGridExamples',
        title:"DataGridExamples",
        description:""
    });

    y({
        url:'/api/MetroDemo.ExampleViews/HamburgerMenuSample',
        title:"HamburgerMenuSample",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/SplitViewPanePlacement',
        title:"SplitViewPanePlacement",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/ScrollBarHelper',
        title:"ScrollBarHelper",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Converters/ThicknessSideType',
        title:"ThicknessSideType",
        description:""
    });

    y({
        url:'/api/MetroDemo.Navigation/HomePage',
        title:"HomePage",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Converters/ResizeModeMinMaxButtonVisibilityConverter',
        title:"ResizeModeMinMaxButtonVisibilityConverter",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Converters/NullToUnsetValueConverter',
        title:"NullToUnsetValueConverter",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/GlowDirection',
        title:"GlowDirection",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Converters/BackgroundToForegroundConverter',
        title:"BackgroundToForegroundConverter",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Converters/ClockDegreeConverter',
        title:"ClockDegreeConverter",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/HamburgerMenuIconItem',
        title:"HamburgerMenuIconItem",
        description:""
    });

    y({
        url:'/api/MetroDemo.Models/Artist',
        title:"Artist",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/SplitView',
        title:"SplitView",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/SliderHelper',
        title:"SliderHelper",
        description:""
    });

    y({
        url:'/api/MetroDemo/AccentColorMenuData',
        title:"AccentColorMenuData",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/RangeSlider',
        title:"RangeSlider",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/ClipBorder',
        title:"ClipBorder",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/UnderlinedType',
        title:"UnderlinedType",
        description:""
    });

    y({
        url:'/api/MahApps.Metro/MahAppsException',
        title:"MahAppsException",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/ProgressRing',
        title:"ProgressRing",
        description:""
    });

    y({
        url:'/api/Caliburn.Metro.Demo.ViewModels/FlyoutBaseViewModel',
        title:"FlyoutBaseViewModel",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Behaviours/TiltBehavior',
        title:"TiltBehavior",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/GroupBoxHelper',
        title:"GroupBoxHelper",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Converters/ToUpperConverter',
        title:"ToUpperConverter",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/SplitViewDisplayMode',
        title:"SplitViewDisplayMode",
        description:""
    });

    y({
        url:'/api/MetroDemo.ExampleViews/ShowAboutCommand',
        title:"ShowAboutCommand",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/TimePickerFormat',
        title:"TimePickerFormat",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/MetroWindow',
        title:"MetroWindow",
        description:""
    });

    y({
        url:'/api/Caliburn.Metro.Demo.Controls/StartupTask',
        title:"StartupTask",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Converters/ThicknessBindingConverter',
        title:"ThicknessBindingConverter",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls.Dialogs/MetroDialogSettings',
        title:"MetroDialogSettings",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Converters/MarkupConverter',
        title:"MarkupConverter",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/MetroContentControl',
        title:"MetroContentControl",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/Position',
        title:"Position",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/WindowButtonCommands',
        title:"WindowButtonCommands",
        description:""
    });

    y({
        url:'/api/MetroDemo.ExampleWindows/SizeToContentDemo',
        title:"SizeToContentDemo",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/NumericUpDownChangedRoutedEventArgs',
        title:"NumericUpDownChangedRoutedEventArgs",
        description:""
    });

    y({
        url:'/api/MetroDemo.ExampleViews/SplitViewExamples',
        title:"SplitViewExamples",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/MetroNavigationWindow',
        title:"MetroNavigationWindow",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/NumericUpDownChangedRoutedEventHandler',
        title:"NumericUpDownChangedRoutedEventHandler",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls.Dialogs/LoginDialog',
        title:"LoginDialog",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/Tile',
        title:"Tile",
        description:""
    });

    y({
        url:'/api/MetroDemo.ExampleViews/CustomDialogExample',
        title:"CustomDialogExample",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/MultiFrameImageMode',
        title:"MultiFrameImageMode",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/TimePickerBaseSelectionChangedEventArgs_1',
        title:"TimePickerBaseSelectionChangedEventArgs<T>",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/TabControlHelper',
        title:"TabControlHelper",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Behaviours/PasswordBoxBindingBehavior',
        title:"PasswordBoxBindingBehavior",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/FlipViewItem',
        title:"FlipViewItem",
        description:""
    });

    y({
        url:'/api/MetroDemo.ExampleWindows/VSDemo',
        title:"VSDemo",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/ExpanderHelper',
        title:"ExpanderHelper",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls.Dialogs/ProgressDialog',
        title:"ProgressDialog",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/TransitioningContentControl',
        title:"TransitioningContentControl",
        description:""
    });

    y({
        url:'/api/MahApps.Metro.Controls/TransitionType',
        title:"TransitionType",
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
