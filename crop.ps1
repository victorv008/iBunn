Add-Type -AssemblyName System.Drawing

$inputPath = "C:\Users\Victor\.gemini\antigravity\brain\8e6a8d87-c9d7-4359-8112-04be379056b2\hero_bg_highq_1773879935450.png"
$outputPath = "c:\Users\Victor\iBunn\website-v2\assets\hero-bg-v2.png"

$img = [System.Drawing.Image]::FromFile($inputPath)

$cropAmount = 80
$newWidth = $img.Width - $cropAmount
$newHeight = $img.Height - $cropAmount

# Crop
$cropRect = New-Object System.Drawing.Rectangle(0, 0, $newWidth, $newHeight)
$bmpCrop = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
$gCrop = [System.Drawing.Graphics]::FromImage($bmpCrop)
$gCrop.DrawImage($img, $cropRect, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
$gCrop.Dispose()

# Resize back
$bmpFinal = New-Object System.Drawing.Bitmap($img.Width, $img.Height)
$gFinal = [System.Drawing.Graphics]::FromImage($bmpFinal)
$gFinal.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gFinal.DrawImage($bmpCrop, 0, 0, $img.Width, $img.Height)
$gFinal.Dispose()

$bmpFinal.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$bmpCrop.Dispose()
$bmpFinal.Dispose()
$img.Dispose()

Write-Host "Success. Cropped out watermark."
