#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>
#import <React/RCTLinkingManager.h>
#import "RNAppAuthAuthorizationFlowManager.h"

@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate, RNAppAuthAuthorizationFlowManager>

@property (nonatomic, weak) id<RNAppAuthAuthorizationFlowManagerDelegate> authorizationFlowManagerDelegate;
@property (nonatomic, strong) UIWindow *window;
@end


//@interface AppDelegate : RCTAppDelegate <RNAppAuthAuthorizationFlowManager>
// #import <React/RCTBridgeDelegate.h>
// #import <UIKit/UIKit.h>

// @interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate>

// @property (nonatomic, strong) UIWindow *window;

// @end