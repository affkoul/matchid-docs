import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["script", { src: "/toast.js" }],

    // <link href="/favicon.png" rel="shortcut icon" type="image/x-icon">
    // <link href="/favicon-sm.png" rel="apple-touch-icon">
    [
      "link",
      { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.png" },
    ],
    ["link", { rel: "apple-touch-icon", href: "/favicon-sm.png" }],
  ],

  base: "/",
  outDir: "../dist",
  themeConfig: {
    search: {
      provider: "local",
    },
    socialLinks: [
      {
        icon: "npm",
        link: "https://www.npmjs.com/package/@matchain/matchid-sdk-react",
      },
    ],
    footer: {
      // message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright &copy; 2024-present <a href="https://matchid.ai">Matchid.ai</a>',
    },
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
      title: "MatchID Docs",
      description: "MatchID Documentation",
      themeConfig: {
        nav: [
          { text: "Config", link: "/match" },
          { text: "React SDK", link: "/react" },
          { text: "API", link: "/api" },
        ],
        sidebar: {
          "/": [
            {
              text: "Home",
              items: [{ text: "About MatchID", link: "/" }],
            },
            {
              text: "Client Side SDK",
              items: [{ text: "React", link: "/react" }],
            },
            {
              text: "Features",
              items: [
                {
                  text: "Authentication",
                  link: "/features/index.html",
                  items: [
                    {
                      text: "Wallet",
                      link: "/features/#wallet",
                    },
                    {
                      text: "Google",
                      link: "/features/#google",
                    },
                    {
                      text: "Email",
                      link: "/features/#email",
                    },
                    {
                      text: "Telegram",
                      link: "/features/#telegram",
                    },
                    {
                      text: "X",
                      link: "/features/#x",
                    },
                  ],
                },
                {
                  text: "SDK Support",
                  link: "/features/sdk-support.html",
                },
              ],
            },
            // {
            //   text: "Security",
            //   collapsed: false,
            //   items: [
            //     {
            //       text: "Overview",
            //       link: "/security/overview.html",
            //     },
            //     {
            //       text: "Threat Models",
            //       link: "/security/threat-models.html",
            //     },
            //     {
            //       text: "Content Security Policy (CSP)",
            //       link: "/security/content-security-policy.html",
            //     },
            //     {
            //       text: "Best Practices",
            //       link: "/security/best-practices.html",
            //     },
            //   ],
            // },
          ],
          "/match/": [
            {
              text: "Config",
              items: [
                {
                  text: "Introduction",
                  link: "/match/",
                },
                {
                  text: "Endpoints",
                  link: "/match/endpoints",
                },
                {
                  text: "Login Methods",
                  link: "/match/loginMethods",
                },
              ],
            },
            {
              text: "SDK",
              items: [
                {
                  text: "React SDK",
                  link: "/react",
                },
              ],
            },
            {
              text: "Other",
              items: [
                {
                  text: "Validate",
                  link: "/match/validate",
                },
              ],
            },
          ],
          "/api/": [
            {
              text: "Global",
              items: [
                {
                  text: "Introduction",
                  link: "/api/",
                },
                {
                  text: "Request Headers",
                  link: "/api/request",
                },
                {
                  text: "Signature",
                  link: "/api/sign",
                },
              ],
            },
            {
              text: "Method",
              items: [
                {
                  text: "Get user bind list by did",
                  link: "/api/method/user/bind/list",
                },
              ],
            },
          ],
          "/react/": [
            {
              text: "Guide",
              items: [
                {
                  text: "Installation",
                  link: "/react/",
                },
                {
                  text: "MatchProvider",
                  link: "/react/MatchProvider",
                },
              ],
            },
            {
              text: "Hooks",
              link: "/react/hooks/index",
              items: [
                {
                  text: "useUserInfo",
                  link: "/react/hooks/useUserInfo",
                },
                {
                  text: "useWallet",
                  link: "/react/hooks/useWallet",
                },
                // {
                //   text: 'useEvmAAWallet',
                //   link: '/react/hooks/useEvmAAWallet',
                // },
                {
                  text: "useMatchEvents",
                  link: "/react/hooks/useMatchEvents",
                },
              ],
            },

            {
              text: "Components",
              link: "/react/components/index",
              items: [
                {
                  text: "Button",
                  link: "/react/components/Button",
                },
                {
                  text: "EmailModal",
                  link: "/react/components/EmailModal",
                },
                {
                  text: "Field",
                  link: "/react/components/Field",
                },
                {
                  text: "Input",
                  link: "/react/components/Input",
                },
                {
                  text: "LoginBox",
                  link: "/react/components/LoginBox",
                },
                {
                  text: "LoginButton",
                  link: "/react/components/LoginButton",
                },
                {
                  text: "LoginModal",
                  link: "/react/components/LoginModal",
                },
                {
                  text: "LoginPanel",
                  link: "/react/components/LoginPanel",
                },
                {
                  text: "Modal",
                  link: "/react/components/Modal",
                },
                {
                  text: "PasswordModal",
                  link: "/react/components/PasswordModal",
                },
                {
                  text: "UsernameModal",
                  link: "/react/components/UsernameModal",
                },
                {
                  text: "Popover",
                  link: "/react/components/Popover",
                },
              ],
            },
            {
              text: "Events",
              items: [
                {
                  text: "onLogin",
                  link: "/react/events/onLogin",
                },
                {
                  text: "onLogout",
                  link: "/react/events/onLogout",
                },
                {
                  text: "onBind",
                  link: "/react/events/onBind",
                },
              ],
            },
          ],
        },
      },
    },
    // "zh-CN": {
    //   label: "简体中文",
    //   lang: "zh-CN",
    //   title: "MatchID SDK 文档",
    //   description: "MatchID SDK Document",
    //   themeConfig: {
    //     nav: [
    //       { text: "文档", link: "/zh-CN/match" },
    //       { text: "React SDK", link: "/zh-CN/react/overview" },
    //       { text: "API", link: "/zh-CN/api" },
    //     ],
    //     sidebar: {
    //       "/zh-CN/match/": [
    //         {
    //           text: "文档",
    //           items: [
    //             {
    //               text: "介绍",
    //               link: "/zh-CN/match/",
    //             },
    //             {
    //               text: "服务域名",
    //               link: "/zh-CN/match/endpoints",
    //             },
    //           ],
    //         },
    //         {
    //           text: "SDK",
    //           items: [
    //             {
    //               text: "React SDK",
    //               link: "/zh-CN/react/overview",
    //             },
    //           ],
    //         },
    //       ],
    //       "/zh-CN/api/": [
    //         {
    //           text: "API",
    //           items: [
    //             {
    //               text: "API请求",
    //               link: "/zh-CN/api/",
    //             },
    //             {
    //               text: "请求头",
    //               link: "/zh-CN/api/request",
    //             },
    //             {
    //               text: "签名",
    //               link: "/zh-CN/api/sign",
    //             },
    //           ],
    //         },
    //       ],
    //       "/zh-CN/react/": [
    //         {
    //           text: "概览",
    //           items: [
    //             {
    //               text: "REACT SDK 介绍",
    //               link: "/zh-CN/react/overview",
    //             },
    //             {
    //               text: "更新日志",
    //               link: "/zh-CN/react/changelog",
    //             },
    //           ],
    //         },
    //         {
    //           text: "入门",
    //           items: [
    //             {
    //               text: "安装",
    //               link: "/zh-CN/react/install",
    //             },
    //             {
    //               text: "配置",
    //               link: "/zh-CN/react/config",
    //             },
    //           ],
    //         },
    //         {
    //           text: "Hooks",
    //           items: [
    //             {
    //               text: "useUserInfo",
    //               link: "/zh-CN/react/hooks/useUserInfo",
    //             },
    //             // {
    //             //   text: 'useWallet',
    //             //   link: '/zh-CN/react/hooks/useWallet',
    //             // },
    //             // {
    //             //   text: 'useEvmAAWallet',
    //             //   link: '/zh-CN/react/hooks/useEvmAAWallet',
    //             // },
    //             {
    //               text: "useMatchEvents",
    //               link: "/zh-CN/react/hooks/useMatchEvents",
    //             },
    //           ],
    //         },
    //         {
    //           text: "Components",
    //           items: [
    //             {
    //               text: "LoginBox",
    //               link: "/zh-CN/react/components/LoginBox",
    //             },
    //             {
    //               text: "LoginButton",
    //               link: "/zh-CN/react/components/LoginButton",
    //             },
    //           ],
    //         },
    //         {
    //           text: "Events",
    //           items: [
    //             {
    //               text: "onLogin",
    //               link: "/zh-CN/react/events/onLogin",
    //             },
    //             {
    //               text: "onLogout",
    //               link: "/zh-CN/react/events/onLogout",
    //             },
    //             {
    //               text: "onBind",
    //               link: "/zh-CN/react/events/onBind",
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   },
    // },
  },
});
