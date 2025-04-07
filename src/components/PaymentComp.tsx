"use client"

import { useState } from "react"
import { WalletIcon, CheckCircle2Icon, Loader2Icon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MobileMoneyPayment() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [network, setNetwork] = useState<"MTN" | "Tigo">("MTN")
  const [amount, setAmount] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handlePayment = async () => {
    if (!phoneNumber || !amount) {
      setError("uzuza ibisabwa byose")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      
      const isSuccessful = Math.random() > 0.2
      
      if (isSuccessful) {
        setIsSuccess(true)
      } else {
        setError("Payment failed. Please try again.")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const resetForm = () => {
    setPhoneNumber("")
    setAmount("")
    setNetwork("MTN")
    setIsSuccess(false)
    setError("")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Mobile Money</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <WalletIcon className="opacity-80" size={16} />
          </div>
          <DialogHeader>
            <DialogTitle className="text-left">
              {isSuccess ? "Payment Successful" : "Mobile Money Payment"}
            </DialogTitle>
            <DialogDescription className="text-left">
              {isSuccess
                ? "Your payment has been verified successfully."
                : "Complete your payment using MTN or Tigo mobile money."}
            </DialogDescription>
          </DialogHeader>
        </div>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center space-y-4 py-8">
            <CheckCircle2Icon className="h-12 w-12 text-green-500" />
            <p className="text-center text-lg font-medium">
              ubwishyu bwawe bwakiriwe neza
            </p>
            <Button onClick={resetForm} className="w-full">
              ishyura ibindi
            </Button>
          </div>
        ) : (
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="network">Mobile Network</Label>
                <Select value={network} onValueChange={(value: "MTN" | "Tigo") => setNetwork(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select network" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MTN">MTN Mobile Money</SelectItem>
                    <SelectItem value="Tigo">Tigo Cash</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">numero ya telephone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={`${network} phone number`}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Rwf</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="shyiramo amafaranga"
                  min="300"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
            </div>

            {error && (
              <p className="text-sm font-medium text-destructive">{error}</p>
            )}

            <Button
              type="button"
              className="w-full"
              onClick={handlePayment}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2Icon className="mr-2 h-4 w-4 border-2 border-y rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                "Make Payment"
              )}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              urabona message y'ubwishyu mu gihe gito
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}