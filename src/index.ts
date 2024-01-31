import {
  getAsyncLifecycle,
  getSyncLifecycle,
  defineConfigSchema,
} from "@openmrs/esm-framework";
import { configSchema } from "./config-schema";
import { createDashboardLink } from "./create-dashboard-link.component";

const moduleName = "@ugandaemr/esm-alis-app";

const options = {
  featureName: "root",
  moduleName,
};

export const importTranslation = require.context(
  "../translations",
  false,
  /.json$/,
  "lazy"
);

export function startupApp() {
  defineConfigSchema(moduleName, configSchema);
}

export const root = getAsyncLifecycle(
  () => import("./root.component"),
  options
);

export const alisDashboardLink = getSyncLifecycle(
  createDashboardLink({
    name: "alis",
    slot: "alis-dashboard-slot",
    title: "ALIS",
  }),
  options
);
