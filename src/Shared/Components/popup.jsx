import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { toast } from "sonner";

function PopUp({ type = "success", msg }) {
  useEffect(() => {
    if (type === "success")
      toast.success(`${msg ? msg : "Event has been created"}`);
    if (type === "info")
      toast.info(
        `${msg ? msg : "Be at the area 10 minutes before the event time"}`,
      );
    if (type === "warning")
      toast.warning(
        `${msg ? msg : "Event start time cannot be earlier than 8am"}`,
      );
    if (type === "error")
      toast.error(`${msg ? msg : "Event has not been created"}`);
    if (type === "loading") {
      toast.promise(
        new Promise((resolve) =>
          setTimeout(() => resolve({ name: "Event" }), 2000),
        ),
        {
          loading: "Loading...",
          success: (data) => `${data.name} has been created`,
          error: "Error",
        },
      );
    }
  }, [type, msg]);

  return null;
}

export default PopUp;
