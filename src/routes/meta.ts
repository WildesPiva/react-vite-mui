export interface MetaRoute {
  slug: string;
  public?: boolean;
  element: JSX.Element | null;
  routes?: MetaRoute[];
}

export const meta: MetaRoute[] = [
  {
    slug: "auth",
    public: true,
    element: null,
    routes: [
      {
        slug: "login",
        public: true,
        element: null,
      },
      {
        slug: "password-reset",
        public: true,
        element: null,
      },
    ],
  },
  {
    slug: "app",
    element: null,
    routes: [
      {
        slug: "home",
        element: null,
      },
    ],
  },
];
