FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app

ENV ASPNETCORE_URLS=http://*:5113


FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY . .
RUN dotnet restore

FROM build AS publish

RUN dotnet build -c Release -o /app/build
RUN dotnet publish -c Release -o /app/publish

RUN cp -R /src/Hakaton.SlobodaNemaCenu.Web/wwwroot/ /app/publish/
RUN cp -R /src/Hakaton.SlobodaNemaCenu.Web/Views/ /app/publish/

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

EXPOSE 5113
ENTRYPOINT ["dotnet", "Hakaton.SlobodaNemaCenu.Web.dll"]
