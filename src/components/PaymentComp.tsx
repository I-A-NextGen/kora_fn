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

export const examPlans = [
  {
    id: "basic",
    amount: 300,
    label: "Basic (300 RWF)",
    exams: 2,
    durationDays: 1,
    features: [
      "Kugerageza ibizamini bibiri by'icyiciro kimwe",
      "Inkunga yihuse ku bibazo",
      "Ikiguzi cyangwa ibisubizo bikurikiranwa",
      "Kwerekana ibisubizo by'ibizamini",
      "Guhitamo gukora ibizamini byibyapa gusa",
    ],
  },
  {
    id: "standard",
    amount: 500,
    label: "Standard (500 RWF)",
    exams: 5,
    durationDays: 3,
    features: [
      "Ibizamini bitanu bitandukanye",
      "Igihe gihagije cyo kwitoza",
      "Gusubiramo ibisubizo nyuma y'ikizamini",
      "Kwerekana ibisubizo by'ibizamini",
      "Guhitamo gukora ibizamini byibyapa gusa",
    ],
  },
  {
    id: "premium",
    amount: 1000,
    label: "Premium (1000 RWF)",
    exams: 12,
    durationDays: 7,
    features: [
      "Ibizamini byinshi byo kwitoza",
      "Gufata amanota no kugereranya uko uhagaze",
      "Kwerekana ibisubizo by'ibizamini",
      "Guhitamo gukora ibizamini byibyapa gusa",
    ],
  },
  {
    id: "gold",
    amount: 2000,
    label: "Gold (2000 RWF)",
    exams: 25,
    durationDays: 30,
    features: [
      "Kwiga igihe kirekire",
      "Gufata amanota no kugereranya uko uhagaze",
      "Kwerekana ibisubizo by'ibizamini",
      "Guhitamo gukora ibizamini byibyapa gusa",
    ],
  },
  {
    id: "platinum",
    amount: 5000,
    label: "Platinum (5000 RWF)",
    exams: 60,
    durationDays: 75,
    features: [
      "Ibizamini byinshi birimo iby'umwihariko",
      "Kwinjira muri forum y'abanyeshuri",
      "Kwerekana ibisubizo by'ibizamini",
      "Guhitamo gukora ibizamini byibyapa gusa",
    ],
  },
  {
    id: "unlimited",
    amount: 10000,
    label: "Unlimited (10000 RWF)",
    exams: 1000000,
    durationDays: 730,
    features: [
      "Uburyo butagira umupaka bwo kwitoza",
      "Gufata amanota no kugereranya uko uhagaze",
      "Kwiga imyaka 2 yose ukoresheje urubuga",
      "Kwerekana ibisubizo by'ibizamini",
      "Guhitamo gukora ibizamini byibyapa gusa",
    ],
  },
];

export default function MobileMoneyPayment({plan}) {
  const [examPlans, setExamPlans] = useState(plan)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [network, setNetwork] = useState<"MTN" | "Tigo">("MTN")
  const [selectedPlan, setSelectedPlan] = useState(examPlans[0])
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handlePayment = async () => {
    if (!phoneNumber) {
      setError("uzuza numero ya telephone")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Simulate random success/failure
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
    setNetwork("MTN")
    setSelectedPlan(examPlans[0])
    setIsSuccess(false)
    setError("")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <p>Mobile Money</p>
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
              Tangira gukora
            </Button>
          </div>
        ) : (
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="network">Hitamo ubwishyu</Label>
                <Select 
                  value={selectedPlan?.id}
                  onValueChange={(value) => {
                    const plan = examPlans.find(p => p.id === value)
                    if (plan) setSelectedPlan(plan)
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment plan" />
                  </SelectTrigger>
                  <SelectContent>
                    {examPlans.map((plan) => (
                      <SelectItem key={plan.id} value={plan.id}>
                        {plan.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">numero ya telephone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={`Numero ya telephone`}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Amafaranga</Label>
                <Input
                  id="amount"
                  type="text"
                  placeholder="Amafaranga"
                  value={`${selectedPlan?.amount ?? 0} RWF`}
                  readOnly
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
                `Pay ${selectedPlan?.amount ?? 0} RWF`
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