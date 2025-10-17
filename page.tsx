"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Download, MoreVertical, Plus, Trash2 } from "lucide-react"

type App = {
  id: string
  name: string
  description: string
  imageUrl: string
  downloadUrl: string
  category: "Game Mod" | "Game" | "Apps"
}

export default function AppStorePage() {
  const [apps, setApps] = useState<App[]>([])
  const [filteredApps, setFilteredApps] = useState<App[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [isAdmin, setIsAdmin] = useState(false)
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  const [showAdminPanel, setShowAdminPanel] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")

  // New app form state
  const [newApp, setNewApp] = useState({
    name: "",
    description: "",
    imageUrl: "",
    downloadUrl: "",
    category: "Game" as App["category"],
  })

  // Load apps from localStorage on mount
  useEffect(() => {
    const storedApps = localStorage.getItem("krd-apps")
    if (storedApps) {
      const parsedApps = JSON.parse(storedApps)
      setApps(parsedApps)
      setFilteredApps(parsedApps)
    } else {
      // Initialize with sample apps
      const sampleApps: App[] = [
        {
          id: "1",
          name: "KRD ANDROID STORE",
          description: "DOWNLOAD KURDISH GAME",
          imageUrl: "/kurdish-game-icon.jpg",
          downloadUrl: "#",
          category: "Game",
        },
        {
          id: "2",
          name: "MOD MENU",
          description: "Advanced game modifications and cheats",
          imageUrl: "/mod-menu-icon.jpg",
          downloadUrl: "#",
          category: "Game Mod",
        },
        {
          id: "3",
          name: "TEST APP",
          description: "Testing application for developers",
          imageUrl: "/test-app-icon.jpg",
          downloadUrl: "#",
          category: "Apps",
        },
      ]
      setApps(sampleApps)
      setFilteredApps(sampleApps)
      localStorage.setItem("krd-apps", JSON.stringify(sampleApps))
    }
  }, [])

  // Filter apps by category
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredApps(apps)
    } else {
      setFilteredApps(apps.filter((app) => app.category === selectedCategory))
    }
  }, [selectedCategory, apps])

  const handleLogin = () => {
    if (username === "Z4KO_BEMNAT" && password === "Dalo0112") {
      setIsAdmin(true)
      setShowLoginDialog(false)
      setShowAdminPanel(true)
      setLoginError("")
      setUsername("")
      setPassword("")
    } else {
      setLoginError("Invalid username or password")
    }
  }

  const handleAddApp = () => {
    if (!newApp.name || !newApp.description || !newApp.downloadUrl) {
      alert("Please fill in all required fields")
      return
    }

    const app: App = {
      id: Date.now().toString(),
      name: newApp.name,
      description: newApp.description,
      imageUrl: newApp.imageUrl || "/generic-app-icon.png",
      downloadUrl: newApp.downloadUrl,
      category: newApp.category,
    }

    const updatedApps = [...apps, app]
    setApps(updatedApps)
    localStorage.setItem("krd-apps", JSON.stringify(updatedApps))

    // Reset form
    setNewApp({
      name: "",
      description: "",
      imageUrl: "",
      downloadUrl: "",
      category: "Game",
    })
  }

  const handleDeleteApp = (id: string) => {
    const updatedApps = apps.filter((app) => app.id !== id)
    setApps(updatedApps)
    localStorage.setItem("krd-apps", JSON.stringify(updatedApps))
  }

  const handleDownload = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <h1 className="text-2xl font-bold text-white">KRD ANDROID STORE</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => setSelectedCategory("Game Mod")}>Game Mod</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedCategory("Game")}>Game</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedCategory("Apps")}>Apps</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setShowLoginDialog(true)}>Owner</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {["All", "Game Mod", "Game", "Apps"].map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-white text-blue-700 hover:bg-white/90"
                  : "border-white/20 text-white hover:bg-white/10"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Apps Grid */}
      <main className="container mx-auto px-4 pb-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredApps.map((app) => (
            <Card key={app.id} className="overflow-hidden border-white/10 bg-white/10 backdrop-blur-sm">
              <div className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <img
                    src={app.imageUrl || "/placeholder.svg"}
                    alt={app.name}
                    className="h-16 w-16 rounded-xl object-cover"
                  />
                  {isAdmin && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteApp(app.id)}
                      className="text-red-400 hover:bg-red-500/20 hover:text-red-300"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{app.name}</h3>
                <p className="mb-4 text-sm text-white/70">{app.description}</p>
                <Button
                  onClick={() => handleDownload(app.downloadUrl)}
                  className="w-full bg-green-500 text-white hover:bg-green-600"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredApps.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-white/70">No apps found in this category</p>
          </div>
        )}
      </main>

      {/* Admin Panel Button */}
      {isAdmin && (
        <Button
          onClick={() => setShowAdminPanel(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-white text-blue-700 shadow-lg hover:bg-white/90"
          size="icon"
        >
          <Plus className="h-6 w-6" />
        </Button>
      )}

      {/* Login Dialog */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Owner Login</DialogTitle>
            <DialogDescription>Enter your credentials to access admin panel</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              />
            </div>
            {loginError && <p className="text-sm text-red-500">{loginError}</p>}
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Admin Panel Dialog */}
      <Dialog open={showAdminPanel} onOpenChange={setShowAdminPanel}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add New App</DialogTitle>
            <DialogDescription>Fill in the details to add a new app to the store</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="app-name">App Name *</Label>
              <Input
                id="app-name"
                value={newApp.name}
                onChange={(e) => setNewApp({ ...newApp, name: e.target.value })}
                placeholder="e.g., KRD ANDROID STORE"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="app-description">Description *</Label>
              <Textarea
                id="app-description"
                value={newApp.description}
                onChange={(e) => setNewApp({ ...newApp, description: e.target.value })}
                placeholder="e.g., DOWNLOAD KURDISH GAME"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="app-image">Image URL (optional)</Label>
              <Input
                id="app-image"
                value={newApp.imageUrl}
                onChange={(e) => setNewApp({ ...newApp, imageUrl: e.target.value })}
                placeholder="https://example.com/icon.png"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="app-download">Download URL *</Label>
              <Input
                id="app-download"
                value={newApp.downloadUrl}
                onChange={(e) => setNewApp({ ...newApp, downloadUrl: e.target.value })}
                placeholder="https://example.com/app.apk"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="app-category">Category *</Label>
              <select
                id="app-category"
                value={newApp.category}
                onChange={(e) => setNewApp({ ...newApp, category: e.target.value as App["category"] })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="Game">Game</option>
                <option value="Game Mod">Game Mod</option>
                <option value="Apps">Apps</option>
              </select>
            </div>
            <Button onClick={handleAddApp} className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              Add App
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
