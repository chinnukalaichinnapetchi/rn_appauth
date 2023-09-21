#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>
#import <React/RCTLinkingManager.h>
#import "RNAppAuthAuthorizationFlowManager.h"

@interface AppDelegate : RCTAppDelegate <RNAppAuthAuthorizationFlowManager>

@property(nonatomic, weak) id<RNAppAuthAuthorizationFlowManagerDelegate> authorizationFlowManagerDelegate;

@end



// #import <React/RCTBridgeDelegate.h>
// #import <UIKit/UIKit.h>

// @interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate>

// @property (nonatomic, strong) UIWindow *window;

// @end