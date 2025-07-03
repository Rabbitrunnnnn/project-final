"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NewStreamPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    location: "",
    description: "",
    resolution: "",
    fps: "",
    username: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your API
    console.log("Creating stream:", formData)
    router.push("/streams")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/streams">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Add New Stream</h1>
          <p className="text-muted-foreground">Configure a new video stream source</p>
        </div>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Stream Configuration</CardTitle>
          <CardDescription>Enter the details for your new video stream</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Stream Name</Label>
                <Input
                  id="name"
                  placeholder="e.g., Front Entrance"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="e.g., Building A"
                  value={formData.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="url">Stream URL</Label>
              <Input
                id="url"
                placeholder="rtsp://192.168.1.100:554/stream1"
                value={formData.url}
                onChange={(e) => handleChange("url", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Optional description of the camera location or purpose"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="resolution">Resolution</Label>
                <Select onValueChange={(value) => handleChange("resolution", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select resolution" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1920x1080">1920x1080 (Full HD)</SelectItem>
                    <SelectItem value="1280x720">1280x720 (HD)</SelectItem>
                    <SelectItem value="640x480">640x480 (SD)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="fps">Frame Rate (FPS)</Label>
                <Select onValueChange={(value) => handleChange("fps", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select FPS" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 FPS</SelectItem>
                    <SelectItem value="25">25 FPS</SelectItem>
                    <SelectItem value="15">15 FPS</SelectItem>
                    <SelectItem value="10">10 FPS</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="username">Username (Optional)</Label>
                <Input
                  id="username"
                  placeholder="Camera username"
                  value={formData.username}
                  onChange={(e) => handleChange("username", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password (Optional)</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Camera password"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Button type="submit">Create Stream</Button>
              <Link href="/streams">
                <Button variant="outline">Cancel</Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
