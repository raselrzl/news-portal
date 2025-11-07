"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import InstagramPostPreviewEmbedded from "./InstagramPostPreviewEmbedded";
import { Button } from "@/components/ui/button";

interface InstagramPost {
  id: string;
  igLink: string;
}

export default function InstagramAllPostsClient() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const take = 8;

  const fetchPosts = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const res = await fetch(
        `/all-ig-post/getInstagramPostsRoute?skip=${skip}&take=${take}`
      );
      const data: InstagramPost[] = await res.json();

      setPosts((prev) => [...prev, ...data]);
      setSkip((prev) => prev + data.length);

      if (data.length < take) setHasMore(false);
    } catch (err) {
      console.error("Failed to fetch Instagram posts:", err);
    } finally {
      setLoading(false);
    }
  }, [skip, loading, hasMore]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // IntersectionObserver for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          fetchPosts();
        }
      },
      { rootMargin: "200px", threshold: 0.1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [fetchPosts, hasMore, loading]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 py-6">
      {/* Support Banner */}
      <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-4 rounded-lg shadow-lg mb-6 text-center">
        <h1 className="text-lg md:text-xl font-bold text-white mb-2">
          ⚡ Independent & Community-Driven
        </h1>
        <p className="text-white mb-4">
          Not for sale. Not funded by billionaires. Support us by following and
          sharing our work!
        </p>
        <Button
          className="bg-white text-purple-600 hover:bg-purple-100"
          onClick={() =>
            window.open("https://www.instagram.com/globaleyepress/", "_blank")
          }
        >
          Follow Us on Instagram
        </Button>
      </div>

      {/* Instagram Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <InstagramPostPreviewEmbedded igLink={post.igLink} />
          </Card>
        ))}
      </div>

      {/* Lazy Load Observer */}
      {hasMore && (
        <div
          ref={observerRef}
          className="h-20 flex justify-center items-center mt-4"
        >
          {loading && <p className="text-gray-500">Loading more posts...</p>}
        </div>
      )}

      {!hasMore && posts.length > 0 && (
        <p className="text-center mt-6 text-gray-500">
          The End
        </p>
      )}

      {!hasMore && posts.length === 0 && !loading && (
        <p className="text-center mt-6 text-gray-500">
          No posts found.
        </p>
      )}
    </div>
  );
}
