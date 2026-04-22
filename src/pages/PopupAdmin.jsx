import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { localLeadStorage } from "@/api/localLeadStorage";
import { motion } from "framer-motion";
import { ArrowLeft, Save, Eye, Loader2, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { useToast } from "@/components/ui/use-toast";

export default function PopupAdmin() {
  const { toast } = useToast();
  const [isSaving, setIsSaving] = React.useState(false);
  const [showPreview, setShowPreview] = React.useState(false);
  const [settings, setSettings] = React.useState({
    active: false,
    title: "",
    subtitle: "",
    description: "",
    redirect_url: "",
    end_date: "",
    delay_seconds: 3,
  });

  React.useEffect(() => {
    const saved = localLeadStorage.getPopupSettings();
    if (saved) setSettings(saved);
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await localLeadStorage.savePopupSettings(settings);
      toast({
        title: "Settings saved",
        description: settings.active
          ? "The popup is now live on the homepage."
          : "The popup has been deactivated.",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to save settings.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const update = (field, value) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  const isExpired = settings.end_date && new Date(settings.end_date) < new Date();

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to={createPageUrl("AdminDashboard")}
            className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">
            Event Popup Manager
            <span className="inline-block w-3 h-3 bg-red-600 rounded-full ml-2 ember-pulse"></span>
          </h1>
          <p className="text-slate-400">
            Configure the homepage popup to promote events, workshops, or announcements.
          </p>
        </motion.div>

        {/* Status Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card
            className={`mb-6 border-2 ${
              settings.active && !isExpired
                ? "border-green-500/50 bg-green-950/20"
                : "border-slate-700 bg-slate-900/50"
            }`}
          >
            <CardContent className="flex items-center justify-between py-5">
              <div className="flex items-center gap-3">
                <Megaphone
                  className={`w-5 h-5 ${
                    settings.active && !isExpired ? "text-green-400" : "text-slate-500"
                  }`}
                />
                <div>
                  <p className="text-white font-semibold">
                    Popup is{" "}
                    {settings.active && !isExpired ? (
                      <span className="text-green-400">LIVE</span>
                    ) : isExpired ? (
                      <span className="text-yellow-400">EXPIRED</span>
                    ) : (
                      <span className="text-slate-400">OFF</span>
                    )}
                  </p>
                  {isExpired && (
                    <p className="text-yellow-400/70 text-sm">
                      End date has passed. Update the date or deactivate.
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Label htmlFor="active-toggle" className="text-slate-300 text-sm">
                  {settings.active ? "Active" : "Inactive"}
                </Label>
                <Switch
                  id="active-toggle"
                  checked={settings.active}
                  onCheckedChange={(checked) => update("active", checked)}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Settings Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="glass-effect border-2 border-slate-800">
            <CardHeader>
              <CardTitle className="text-slate-200">Popup Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <Label htmlFor="title" className="text-slate-200">
                  Title *
                </Label>
                <Input
                  id="title"
                  placeholder="e.g. Join Our Workshop"
                  value={settings.title}
                  onChange={(e) => update("title", e.target.value)}
                  className="bg-slate-800 border-slate-700 text-slate-100 focus:border-red-600"
                />
              </div>

              <div>
                <Label htmlFor="subtitle" className="text-slate-200">
                  Subtitle
                </Label>
                <Input
                  id="subtitle"
                  placeholder="e.g. Humanfire - Talent on the move"
                  value={settings.subtitle}
                  onChange={(e) => update("subtitle", e.target.value)}
                  className="bg-slate-800 border-slate-700 text-slate-100 focus:border-red-600"
                />
              </div>

              <div>
                <Label htmlFor="description" className="text-slate-200">
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="e.g. Edition #1: The Brand Issue - Creating Lasting Brand Experiences for Talent"
                  value={settings.description}
                  onChange={(e) => update("description", e.target.value)}
                  rows={3}
                  className="bg-slate-800 border-slate-700 text-slate-100 focus:border-red-600"
                />
              </div>

              <div>
                <Label htmlFor="redirect_url" className="text-slate-200">
                  Registration/Ticket URL
                </Label>
                <Input
                  id="redirect_url"
                  type="url"
                  placeholder="https://www.quicket.co.za/events/..."
                  value={settings.redirect_url}
                  onChange={(e) => update("redirect_url", e.target.value)}
                  className="bg-slate-800 border-slate-700 text-slate-100 focus:border-red-600"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Users will be redirected here after registering. Leave empty to skip redirect.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="end_date" className="text-slate-200">
                    End Date
                  </Label>
                  <Input
                    id="end_date"
                    type="date"
                    value={settings.end_date}
                    onChange={(e) => update("end_date", e.target.value)}
                    className="bg-slate-800 border-slate-700 text-slate-100 focus:border-red-600"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Popup auto-hides after this date.
                  </p>
                </div>

                <div>
                  <Label htmlFor="delay" className="text-slate-200">
                    Delay (seconds)
                  </Label>
                  <Input
                    id="delay"
                    type="number"
                    min={0}
                    max={30}
                    value={settings.delay_seconds}
                    onChange={(e) =>
                      update("delay_seconds", parseInt(e.target.value) || 0)
                    }
                    className="bg-slate-800 border-slate-700 text-slate-100 focus:border-red-600"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Seconds before popup appears.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-slate-700">
                <Button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="fire-button text-white"
                >
                  {isSaving ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Save Settings
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowPreview(!showPreview)}
                  className="border-slate-700 text-slate-200 hover:bg-slate-800"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  {showPreview ? "Hide Preview" : "Preview"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Live Preview */}
        {showPreview && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6"
          >
            <Card className="glass-effect border-2 border-slate-800">
              <CardHeader>
                <CardTitle className="text-slate-200">Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 max-w-md mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {settings.title || "Your Title Here"}
                    <span className="inline-block w-2 h-2 bg-red-600 rounded-full ml-2 ember-pulse"></span>
                  </h3>
                  <div className="text-slate-300 text-base mt-3">
                    <strong>{settings.subtitle || "Your Subtitle"}</strong>
                    <br />
                    <span className="text-sm text-slate-500 mt-2 block">
                      {settings.description || "Your description here..."}
                    </span>
                  </div>
                  <div className="mt-5 space-y-3">
                    <div className="h-9 bg-slate-800 border border-slate-700 rounded-md" />
                    <div className="h-9 bg-slate-800 border border-slate-700 rounded-md" />
                    <div className="h-9 bg-slate-800 border border-slate-700 rounded-md" />
                    <div className="h-9 bg-slate-800 border border-slate-700 rounded-md" />
                    <div className="h-10 bg-gradient-to-r from-red-600 to-orange-500 rounded-md flex items-center justify-center text-white text-sm font-semibold">
                      Register for Event
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}
