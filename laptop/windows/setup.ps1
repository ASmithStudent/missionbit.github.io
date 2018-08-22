# Install Chocolatey
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
# Download Meraki agent installer
(New-Object System.Net.WebClient).DownloadFile("https://www.missionbit.com/laptop/windows/meraki-agent-missionbit.1.0.nupkg", "C:\users\missionbit\downloads\meraki-agent-missionbit.1.0.nupkg")
# Install Meraki agent
cinst meraki-agent-missionbit -s "C:\users\missionbit\downloads\meraki-agent-missionbit.1.0.nupkg" -y
# Delete installer
Remove-Item -path C:\users\missionbit\downloads\meraki-agent-missionbit.1.0.nupkg -recurse
# Run Chocolatey script
cinst -y $( ( [xml]( Invoke-WebRequest -Uri https://www.missionbit.com/laptop/windows/mb.config -UseBasicParsing) ).packages.package | Select id ).id
