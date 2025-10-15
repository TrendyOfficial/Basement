import classNames from "classnames";
import { t } from "i18next";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/buttons/Button";
import { WideContainer } from "@/components/layout/WideContainer";
import { DetailsModal } from "@/components/overlays/detailsModal";
import { useModal } from "@/components/overlays/Modal";
import { useDiscoverStore } from "@/stores/discover";
import { useProgressStore } from "@/stores/progress";
import { MediaItem } from "@/utils/mediaTypes";

import { DiscoverNavigation } from "./components/DiscoverNavigation";
import type { FeaturedMedia } from "./components/FeaturedCarousel";
import { LazyTabContent } from "./components/LazyTabContent";
import { MediaCarousel } from "./components/MediaCarousel";
import { ScrollToTopButton } from "./components/ScrollToTopButton";

export function DiscoverContent() {
  const { selectedCategory, setSelectedCategory } = useDiscoverStore();
  const [detailsData, setDetailsData] = useState<any>();
  const navigate = useNavigate();
  const detailsModal = useModal("discover-details");
  const carouselRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const progressItems = useProgressStore((state) => state.items);

  // State for active provider filtering
  const [activeProvider, setActiveProvider] = useState<{
    key: string;
    providerId?: number;
    name: string;
  } | null>(null);

  // Map of provider key to TMDB provider id, name, image
  const providerMap: Record<
    string,
    { id?: number; name: string; img: string }
  > = {
    netflix: { id: 8, name: "Netflix", img: "/platforms/netflix.png" },
    disneyplus: { id: 337, name: "Disney+", img: "/platforms/disneyplus.png" },
    primevideo: { id: 119, name: "Prime Video", img: "/platforms/primevideo.png" },
    appletv: { id: 350, name: "Apple TV+", img: "/platforms/appletv.png" },
    hulu: { id: 15, name: "Hulu", img: "/platforms/hulu.png" },
    crunchyroll: { id: 283, name: "Crunchyroll", img: "/platforms/crunchyroll.png" },
    hbomax: { id: 384, name: "HBO Max", img: "/platforms/hbomax.png" },
    paramount: { id: 531, name: "Paramount+", img: "/platforms/paramount.png" },
  };

  const providersOrder = [
    "netflix",
    "disneyplus",
    "primevideo",
    "appletv",
    "hulu",
    "crunchyroll",
    "hbomax",
    "paramount",
  ];

  const isMoviesTab = selectedCategory === "movies";
  const isTVShowsTab = selectedCategory === "tvshows";
  const isEditorPicksTab = selectedCategory === "editorpicks";

  const handleCategoryChange = (category: string) => {
    setActiveProvider(null);
    setSelectedCategory(category as "movies" | "tvshows" | "editorpicks");
  };

  const handleShowDetails = async (media: MediaItem | FeaturedMedia) => {
    setDetailsData({
      id: Number(media.id),
      type: media.type === "movie" ? "movie" : "show",
    });
    detailsModal.show();
  };

  const movieProgressItems = Object.entries(progressItems || {}).filter(
    ([_, item]) => item.type === "movie"
  );
  const tvProgressItems = Object.entries(progressItems || {}).filter(
    ([_, item]) => item.type === "show"
  );

  function handleProviderClick(key: string) {
    const p = providerMap[key];
    if (!p) return;
    setActiveProvider({ key, providerId: p.id, name: p.name });
    // Optionally switch to movies tab by default:
    // setSelectedCategory("movies");
  }

  function clearProviderFilter() {
    setActiveProvider(null);
  }

  const renderMoviesContent = () => {
    if (activeProvider) {
      return (
        <>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img
                src={providerMap[activeProvider.key].img}
                alt={providerMap[activeProvider.key].name}
                className="h-8 rounded-md"
              />
              <h3 className="text-lg font-semibold">
                {t("discover.providerResults", { provider: activeProvider.name })}
              </h3>
            </div>
            <Button theme="plain" onClick={clearProviderFilter}>
              {t("discover.clearFilter") || "Clear"}
            </Button>
          </div>
          <MediaCarousel
            content={{
              type: "provider",
              providerId: activeProvider.providerId,
              providerKey: activeProvider.key,
              providerName: activeProvider.name,
            }}
            isTVShow={false}
            carouselRefs={carouselRefs}
            onShowDetails={handleShowDetails}
            showProviders
            moreContent
          />
        </>
      );
    }
    // fallback: default content
    return (
      <>
        {movieProgressItems.length > 0 && (
          <MediaCarousel
            content={{ type: "recommendations" }}
            isTVShow={false}
            carouselRefs={carouselRefs}
            onShowDetails={handleShowDetails}
            moreContent
            showRecommendations
          />
        )}
        <MediaCarousel
          content={{ type: "latest", fallback: "nowPlaying" }}
          isTVShow={false}
          carouselRefs={carouselRefs}
          onShowDetails={handleShowDetails}
          moreContent
        />
        <MediaCarousel
          content={{ type: "latest4k", fallback: "popular" }}
          isTVShow={false}
          carouselRefs={carouselRefs}
          onShowDetails={handleShowDetails}
          moreContent
        />
        <MediaCarousel
          content={{ type: "topRated" }}
          isTVShow={false}
          carouselRefs={carouselRefs}
          onShowDetails={handleShowDetails}
          moreContent
        />
        <MediaCarousel
          content={{ type: "provider" }}
          isTVShow={false}
          carouselRefs={carouselRefs}
          onShowDetails={handleShowDetails}
          showProviders
          moreContent
        />
        <MediaCarousel
          content={{ type: "genre" }}
          isTVShow={false}
          carouselRefs={carouselRefs}
          onShowDetails={handleShowDetails}
          showGenres
          moreContent
        />
      </>
    );
  };

  const renderTVShowsContent = () => {
    if (activeProvider) {
      return (
        <>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img
                src={providerMap[activeProvider.key].img}
                alt={providerMap[activeProvider.key].name}
                className="h-8 rounded-md"
              />
              <h3 className="text-lg font-semibold">
                {t("discover.providerResults", { provider: activeProvider.name })}
              </h3>
            </div>
            <Button theme="plain" onClick={clearProviderFilter}>
              {t("discover.clearFilter") || "Clear"}
            </Button>
          </div>
          <MediaCarousel
            content={{
              type: "provider",
              providerId: activeProvider.providerId,
              providerKey: activeProvider.key,
              providerName: activeProvider.name,
            }}
            isTVShow
            carouselRefs={carouselRefs}
            onShowDetails={handleShowDetails}
            showProviders
            moreContent
          />
        </>
      );
    }
    return (
      <>
        {tvProgressItems.length > 0 && (
          <MediaCarousel
            content={{ type: "recommendations" }}
            isTVShow
            carouselRefs={carouselRefs}
            onShowDetails={handleShowDetails}
            moreContent
            showRecommendations
          />
        )}
        <MediaCarousel
          content={{ type: "latesttv", fallback: "onTheAir" }}
          isTVShow
          carouselRefs={carouselRefs}
          onShowDetails={handleShowDetails}
          moreContent
        />
        <MediaCarousel
          content={{ type: "topRated" }}
          isTVShow
          carouselRefs={carouselRefs}
          onShowDetails={handleShowDetails}
          moreContent
        />
        <MediaCarousel
          content={{ type: "popular" }}
          isTVShow
          carouselRefs={carouselRefs}
          onShowDetails={handleShowDetails}
          moreContent
        />
        <MediaCarousel
          content={{ type: "provider" }}
          isTVShow
          carouselRefs={carouselRefs}
          onShowDetails={handleShowDetails}
          showProviders
          moreContent
        />
        <MediaCarousel
          content={{ type: "genre" }}
          isTVShow
          carouselRefs={carouselRefs}
          onShowDetails={handleShowDetails}
          showGenres
          moreContent
        />
      </>
    );
  };

  const renderEditorPicksContent = () => {
    return (
      <>
        <MediaCarousel
          content={{ type: "editorPicks" }}
          isTVShow={false}
          carouselRefs={carouselRefs}
          onShowDetails={handleShowDetails}
          moreContent
        />
        <MediaCarousel
          content={{ type: "editorPicks" }}
          isTVShow
          carouselRefs={carouselRefs}
          onShowDetails={handleShowDetails}
          moreContent
        />
      </>
    );
  };

  return (
    <div className="relative min-h-screen">
      <DiscoverNavigation
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <div className="flex justify-center items-center gap-8 mt-8 mb-6 flex-wrap">
        {providersOrder.map((key) => {
          const p = providerMap[key];
          return (
            <img
              key={key}
              src={p.img}
              alt={p.name}
              title={p.name}
              className={classNames(
                "h-10 cursor-pointer transition-transform hover:scale-110",
                "rounded-md"
              )}
              onClick={() => handleProviderClick(key)}
            />
          );
        })}
      </div>

      <WideContainer ultraWide classNames="!px-0">
        <LazyTabContent isActive={isMoviesTab}>
          {renderMoviesContent()}
        </LazyTabContent>
        <LazyTabContent isActive={isTVShowsTab}>
          {renderTVShowsContent()}
        </LazyTabContent>
        <LazyTabContent isActive={isEditorPicksTab}>
          {renderEditorPicksContent()}
        </LazyTabContent>
      </WideContainer>

      <div
        className={classNames(
          "flex justify-center mt-8 mb-12",
          isMoviesTab ? "block" : "hidden"
        )}
      >
        <Button theme="purple" onClick={() => navigate("/discover/all")}>
          {t("discover.viewLists")}
        </Button>
      </div>

      <ScrollToTopButton />

      {detailsData && <DetailsModal id="discover-details" data={detailsData} />}
    </div>
  );
}

export default DiscoverContent;
