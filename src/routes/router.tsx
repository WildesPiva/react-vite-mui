import { useAppSelector } from "@/redux/hooks";
import { settingsSelectors } from "@/redux/reducers/settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MetaRoute, meta } from "@/routes/meta";

const generateRoutes = (onlyPublic = true) => {
  return (route: MetaRoute, index: number) => {
    if (onlyPublic && !route.public) {
      return null;
    }

    return (
      <Route
        key={`${route.slug}[${index}]`}
        path={`${route.slug}`}
        element={route.element}
      >
        {route.routes && route.routes.length
          ? route.routes.map(generateRoutes(onlyPublic))
          : null}
      </Route>
    );
  };
};

export const Router = () => {
  const isLoggedIn = useAppSelector(settingsSelectors.active);
  return (
    <BrowserRouter>
      <Routes>
        {meta.map(generateRoutes(!isLoggedIn))}
        <Route path="*" element={<>404</>} />
      </Routes>
    </BrowserRouter>
  );
};
