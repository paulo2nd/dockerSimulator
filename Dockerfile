#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY backend/Simulador-WebAPI/ Simulador-WebAPI/
COPY backend/Simulador-DAO/ Simulador-DAO/
RUN dotnet restore "Simulador-WebAPI/Simulador-WebAPI.csproj"
COPY . .
WORKDIR "/src/Simulador-WebAPI"
RUN dotnet build "Simulador-WebAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Simulador-WebAPI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Simulador-WebAPI.dll"]
